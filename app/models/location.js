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
  climate: attr('string'),
  terrain: attr('string'),
  surface_water: attr('string'), // eslint-disable-line
  residents: hasMany('person'),
  films: hasMany('film')

});
