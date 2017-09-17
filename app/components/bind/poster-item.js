import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({

  classNames: ['inline'],

  // Inject the service posters to find films posters
  posters: inject.service('posters'),

  // id to identify the poster in the service
  id: '',

  // title to search the poster in the service
  title: '',

  // CSS class on the <img>
  classImg: '',

  // promised image, used with await in the template
  image: computed('id', 'title', function() {
    return this.get('posters').getPosterRef(this.get('id'), this.get('title')).get('image');
  })

});
