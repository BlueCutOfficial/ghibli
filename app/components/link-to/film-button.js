import Ember from 'ember';
import ENV from 'ghibli/config/environment';

const {
  Component,
  computed,
  inject,
  isEmpty
} = Ember;

export default Component.extend({

  ajax: inject.service(),
  defaultPosterURL: 'poster.jpg',
  apiKey: ENV.APP.OASK,
  image: computed('film.title', 'defaultPosterURL', 'apiKey', function() {
    let defaultPosterURL = this.get('defaultPosterURL');
    if (isEmpty(this.get('film.title'))) {
      return defaultPosterURL;
    }
    let base = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=';
    let url = `${base}${this.get('film.title').split(' ').join('+')}+poster`;
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
  })

});
