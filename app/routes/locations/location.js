import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  model(params) {
    let locations = this.modelFor('locations');
    return locations.findBy('id', params.id);
  }

});
