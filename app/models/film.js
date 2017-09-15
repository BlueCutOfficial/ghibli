import Ember from 'ember';
import DS from 'ember-data';

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
  rt_score: attr('string'), // eslint-disable-line
  people: hasMany('person'),
  locations: hasMany('location'),
  vehicles: hasMany('vehicle'),

  // A shorter description + '...' (return the full description if length < 40)
  shortDescription: computed('description', function() {
    let desc = this.get('description');
    if (desc === undefined || desc.length === 0) {
      return '';
    }
    let complete = false;
    let nbCharacters = 40;
    if (desc.length <= nbCharacters) {
      nbCharacters = desc.length;
      complete = true;
    }
    let shortDesc = desc.substring(0, nbCharacters);
    return (complete) ? shortDesc : `${shortDesc}...`;
  })

});
