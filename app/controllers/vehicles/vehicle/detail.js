import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  lines: computed('model.vehicle_class', 'model.length', function() {
    return [
      {
        'key': 'Vehicle class',
        'value': this.get('model.vehicle_class')
      },
      {
        'key': 'Length',
        'value': this.get('model.length')
      }
    ];
  })

});
