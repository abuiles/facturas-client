import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.csrf.fetchToken();
  },
  actions: {
    validSignIn: function() {
      this.transitionTo("dashboard");
    },
    didSignOut: function() {
      this.transitionTo("index");
    }
  }
});
