import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  // The storage for film-states is the array of all seen films ids
  filmStates: storageFor('film-states'),
  // modelWithSeen is the model array, with a boolean "isSeen" added
  modelWithSeen: computed('model.[]', 'filmStates.[]', function() {
    let selfFilmStates = this.get('filmStates');
    return this.get('model').map((filmItem) => {
      filmItem.set('isSeen', selfFilmStates.includes(filmItem.id));
      return filmItem;
    });
  }),

  // Sort properties
  queryParams: ['sort'],
  sort: 'release_date:desc',
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
    },
    {
      name: 'Rating',
      code: 'rt_score:desc'
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
  sortedFilms: computed.sort('modelWithSeen', 'sortProperty'),

  unseenFilms: computed.filterBy('modelWithSeen', 'isSeen', false),

  // Random unseen film
  unseenFilm: computed('unseenFilms.[]', function() {
    let numberUnseen = this.get('unseenFilms.length');
    if (this.get('unseenFilms') === undefined || numberUnseen === 0) {
      return undefined;
    }
    let randomIndex = Math.floor(Math.random() * numberUnseen);
    return this.get('unseenFilms')[randomIndex];
  }).volatile(),

  actions: {
    setSorting(option) {
      this.set('sort', option.code);
    }
  }

});
