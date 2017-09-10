import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  queryParams: ['sort'],
  // Recent first by default
  sort: 'releaseDateDesc',

  sortOptions: {
    'titleAsc': ['title:asc'],
    'releaseDateDesc': ['release_date:desc'],
    'releaseDateAsc': ['release_date:asc']
  },

  sortProperty: computed('sort', 'sortOptions', function() {
    return this.get('sortOptions')[this.get('sort')];
  }),

  sortedFilms: computed.sort('model', 'sortProperty')

  // actions: {
  //   setSorting(option) {
  //     this.set('sortBy', option);
  //   }
  // }

});
