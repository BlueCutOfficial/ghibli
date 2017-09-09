import Ember from 'ember';
import config from './config/environment';

const {
  Router: EmberRouter
} = Ember;

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('films');
  this.route('film', { path: '/films/:id' }, function() {
    this.route('detail');
  });

  this.route('characters', function() {
    this.route('character', { path: ':id' }, function() {
      this.route('detail');
    });
  });

  this.route('locations', function() {
    this.route('location', { path: ':id' }, function() {
      this.route('detail');
    });
  });

  this.route('vehicles', function() {
    this.route('vehicle', { path: ':id' }, function() {
      this.route('detail');
    });
  });
});

export default Router;
