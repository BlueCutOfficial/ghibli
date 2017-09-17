import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({

  lines: computed('model.director', 'model.producer', 'model.release_date', 'model.rt_score', function() {
    return [
      {
        'key': 'Director',
        'value': this.get('model.director')
      },
      {
        'key': 'Producer',
        'value': this.get('model.producer')
      },
      {
        'key': 'Release date',
        'value': this.get('model.release_date')
      },
      {
        'key': 'Rating',
        'value': this.get('model.rt_score')
      }
    ];
  }),

  actions: {

    markSeen() {
      this.get('model').toggleSeen();
    }

  }

});
