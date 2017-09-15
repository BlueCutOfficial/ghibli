import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  /**
   * @public
   * We need to do this because of the design of the API.
   * Person model refers many locations/vehicles
   * But the API model for character is not bound to these models,
   * so Ember is not able to find the locations/vehicles
   * unless they are loaded through another route.
   */
  beforeModel() {
    //eslint-disable-next-line
    return Promise.all([
      this.get('store').findAll('location'),
      this.get('store').findAll('vehicle')
    ]);
  },

  model() {
    return this.get('store').findAll('person');
  }

});
