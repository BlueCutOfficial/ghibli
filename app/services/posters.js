import Ember from 'ember';
import ENV from 'ghibli/config/environment';
import { task } from 'ember-concurrency';

const {
  Service,
  Object: EmberObject,
  isEmpty,
  inject,
  debug
} = Ember;

export default Service.extend({

  ajax: inject.service(),
  posters: null,
  defaultPosterURL: '/poster.jpg',
  apiKey: ENV.APP.OASK,

  init() {
    this._super(...arguments);
    this.set('posters', []);
  },

  // Method called by the component that needs a poster
  getPosterRef(idFilm, titleFilm) {
    // Check if the poster for this film id is already in the array
    let poster =  this.get('posters').findBy('id', idFilm);
    // If not, create it : the id is used for the findBy, and the image is the promise the caller component wants
    if (poster === undefined) {
      poster = EmberObject.create({
        id: idFilm,
        image: this.requestPoster(titleFilm)
      });
      this.get('posters').pushObject(poster);
    }
    return poster;
  },

  requestPoster(titleFilm) {
    debug(`TASK : request poster ${titleFilm}`);
    return this.get('taskPoster').perform(titleFilm);
  },

  taskPoster: task(function* (titleFilm) {
    debug(`TASK : start task ${titleFilm}`);
    let promise = this.performRequest(titleFilm);
    return yield promise;
  }).enqueue(),

  // Find a poster on api.cognitive.microsoft.com, return the default poster if there is a problem somewhere
  performRequest(titleFilm) {
    debug(`TASK : perform request ${titleFilm}`);
    let defaultPosterURL = this.get('defaultPosterURL');
    if (isEmpty(titleFilm) || isEmpty(this.get('apiKey'))) {
      return defaultPosterURL;
    }
    let base = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=';
    let url = `${base}${titleFilm.split(' ').join('+')}+poster`;
    return this.get('ajax').request(url, {
      headers: {
        'Ocp-Apim-Subscription-Key': this.get('apiKey')
      }
    }).then((data) => {
      if (data.value.length > 0) {
        return data.value[0].thumbnailUrl;
      }
      return defaultPosterURL;
    }, () => {
      return defaultPosterURL;
    });
  }

});
