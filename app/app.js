import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import { setCsrfUrl } from 'rails-csrf';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'client', // TODO: loaded via config
  Resolver: Resolver
});

setCsrfUrl(ClientENV.railsCsrf.csrfURL);

loadInitializers(App, 'client');
loadInitializers(App, 'rails-csrf');

export default App;
