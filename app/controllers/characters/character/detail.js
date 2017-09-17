import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  lines: computed('model.gender', 'model.age', 'model.eye_color', 'model.hair_color', function() {
    return [
      {
        'key': 'Gender',
        'value': this.get('model.gender')
      },
      {
        'key': 'Age',
        'value': this.get('model.age')
      },
      {
        'key': 'Eye color',
        'value': this.get('model.eye_color')
      },
      {
        'key': 'Hair color',
        'value': this.get('model.hair_color')
      }
    ];
  })

});
