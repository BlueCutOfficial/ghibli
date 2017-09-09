import DS from 'ember-data';

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
  vehicles: hasMany('vehicle')

});
