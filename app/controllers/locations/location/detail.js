import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  lines: computed('model.climate', 'model.terrain', 'model.surface_water', function() {
    return [
      {
        'key': 'Climate',
        'value': this.get('model.climate')
      },
      {
        'key': 'Terrain',
        'value': this.get('model.terrain')
      },
      {
        'key': 'Surface water',
        'value': this.get('model.surface_water')
      }
    ];
  })

});
