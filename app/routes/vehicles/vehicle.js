import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  model(params) {
    let vehicles = this.modelFor('vehicles');
    return vehicles.findBy('id', params.id);
  }

});
