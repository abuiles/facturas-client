import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});


// requirejs('list-view/main');

loadInitializers(App, 'client');

// Ember.onerror = function(error) {
//   console.log('There was an error', error);
// }

// // Capture errors in promises.
// // They will bubble up to onerror if we don't provide this, but when they bubble
// // they lose stack information. With this, we get the stack.
// Ember.RSVP.on('error', function(error) {
//   console.log('There was an error', error);
// });


export default App;
