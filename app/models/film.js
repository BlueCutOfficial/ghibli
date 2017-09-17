import Ember from 'ember';
import DS from 'ember-data';
import { storageFor } from 'ember-local-storage';

const {
  computed
} = Ember;

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  director: attr('string'),
  producer: attr('string'),
  release_date: attr('string'), // eslint-disable-line
  rt_score: attr('number'), // eslint-disable-line
  people: hasMany('person'),
  locations: hasMany('location'),
  vehicles: hasMany('vehicle'),

  // A shorter description + '...' (return the full description if length < 40)
  shortDescription: computed('description', function() {
    let desc = this.get('description');
    if (desc === undefined) {
      return '';
    }
    let nbCharacters = 40;
    if (desc.length <= nbCharacters) {
      return desc;
    }
    let shortDesc = desc.substring(0, nbCharacters);
    return `${shortDesc}...`;
  }),

  // The storage for film-states is the array of all seen films ids
  filmStates: storageFor('film-states'),
  // A film is seen when the film storage contains its id
  isSeen: computed('model.id', 'filmStates.[]', function() {
    return this.get('filmStates').includes(this.get('id'));
  }),
  // Modify the local storage
  toggleSeen() {
    if (this.get('isSeen')) {
      this.get('filmStates').removeObject(this.get('id'));
    } else {
      this.get('filmStates').addObject(this.get('id'));
    }
  }

});
