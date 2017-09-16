import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({

  // Inject the service posters to find films posters
  posters: inject.service('posters'),

  // image is a promise, used with await in the template
  image: computed('film.id', 'film.title', function() {
    return this.get('posters').getPosterRef(this.get('film.id'), this.get('film.title')).get('image');
  })

});
