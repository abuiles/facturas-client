import Ember from 'ember';

import Ember from 'ember';
import 'ember-devise-simple-auth';

import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
  this.route('signUp', {path: '/sign-up'});
  this.route('dashboard');
  this.resource('clients', function() {
    this.route('new');
    this.route('edit', {path: ':client_id/edit'});

    this.resource('clients.show', {path: ':client_id'}, function() {
      this.resource('invoice_items', function() {
        this.route('payment');
        this.route('new');
        this.route('show', {path: ':invoice_item_id'});
        this.route('edit', {path: ':invoice_item_id/edit'});
      });
    });
  });
});

export default Router;
