import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  queryParams: ['sort'],
  sort: 'release_date:desc',

  // Select item definition
  selectableOptions: [
    {
      name: 'Alphabetic',
      code: 'title:asc'
    },
    {
      name: 'Recent first',
      code: 'release_date:desc'
    },
    {
      name: 'Old first',
      code: 'release_date:asc'
    }
  ],

  // Current option in the select item
  selectedOption: computed('sort', 'selectableOptions', function() {
    return this.get('selectableOptions').findBy('code', this.get('sort'));
  }),

  // The array used as parameter for sortedFilms
  sortProperty: computed('sort', function() {
    return [this.get('sort')];
  }),

  // Sorted model
  sortedFilms: computed.sort('model', 'sortProperty'),

  actions: {
    setSorting(option) {
      this.set('sort', option.code);
    }
  }

});
