import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function() {
    return this.csrf.fetchToken();
  },
  actions: {
    validSignIn: function() {
      this.transitionTo("dashboard");
    },
    didSignOut: function() {
      this.transitionTo("index");
    },
    willTransition: function() {
      this.controller.set('drawerOpen',false);
    }
  }
});
