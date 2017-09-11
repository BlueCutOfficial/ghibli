import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  // Available options for queryParams : key=sort, value=parameter for sortProperty
  sortOptions: {
    'titleAsc': ['title:asc'],
    'releaseDateDesc': ['release_date:desc'],
    'releaseDateAsc': ['release_date:asc']
  },
  // Match between select values and available sort values
  match: {
    'Alphabetic': 'titleAsc',
    'Recent first': 'releaseDateDesc',
    'Old first': 'releaseDateAsc'
  },

  queryParams: ['sort'],
  sort: 'releaseDateDesc',

  // Select item
  selectableOptions: ['Recent first', 'Old first', 'Alphabetic'],
  selectedOption: '',

  // The array used as parameter for sortedFilms
  sortProperty: computed('sort', 'sortOptions', function() {
    return this.get('sortOptions')[this.get('sort')];
  }),

  // Sorted model
  sortedFilms: computed.sort('model', 'sortProperty'),

  actions: {
    setSorting(option) {
      this.set('selectedOption', option);
      this.set('sort', this.get('match')[option]);
    }
  }

});
