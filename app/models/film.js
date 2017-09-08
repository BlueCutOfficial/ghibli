import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({

  title: attr('string'),
  description: attr('string'),
  director: attr('string'),
  producer: attr('string'),
  release_date: attr('string'), // eslint-disable-line
  rt_score: attr('string') // eslint-disable-line

});
