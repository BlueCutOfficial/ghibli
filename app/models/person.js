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

  name: attr('string'),
  gender: attr('string'),
  age: attr('string'),
  eye_color: attr('string'), // eslint-disable-line
  hair_color: attr('string'), // eslint-disable-line
  films: hasMany('film'),
  locations: hasMany('location'),
  vehicles: hasMany('vehicle')

});
