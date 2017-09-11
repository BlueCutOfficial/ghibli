import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  // The storage for film-states is the array of all seen films ids
  filmStates: storageFor('film-states'),

  // isSeen if the film's id is contained in the storage
  isSeen: computed('model.id', 'filmStates.[]', function() {
    return this.get('filmStates').includes(this.get('model.id'));
  }),

  actions: {

    markSeen() {
      if (this.get('isSeen')) {
        this.get('filmStates').removeObject(this.get('model.id'));
      } else {
        this.get('filmStates').addObject(this.get('model.id'));
      }
    }

  }

});
