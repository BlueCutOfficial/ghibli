import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  name: attr('string'),
  description: attr('string'),
  vehicle_class: attr('string'), // eslint-disable-line
  length: attr('string'),
  pilot: belongsTo('person'),
  films: belongsTo('film')

});
