import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signUp', {path: '/sign-up'});
  this.route('dashboard');
  this.resource('clients', function() {
    this.route('new');
    this.route('edit', {path: ':client_id/edit'});

    this.route('show', {path: ':client_id'}, function() {
      this.resource('invoice_items', function() {
        this.route('payment');
        this.route('new');
        this.route('show', {path: ':invoice_item_id'});
        this.route('edit', {path: ':invoice_item_id/edit'});
      });
    });
  });
  this.route('login');
  this.route('session');
  this.route('error');
});

export default Router;
