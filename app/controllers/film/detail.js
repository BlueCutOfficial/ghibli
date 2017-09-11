import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({

  actions: {

    markSeen() {
      this.set('model.isSeen', !this.get('model.isSeen'));
    }

  }

});
