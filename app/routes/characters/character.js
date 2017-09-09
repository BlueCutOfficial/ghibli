import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  model(params) {
    let characters = this.modelFor('characters');
    return characters.findBy('id', params.id);
  }

});
