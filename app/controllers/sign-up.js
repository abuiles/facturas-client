import Ember from 'ember';
import { request } from 'ic-ajax';

var SignupController = Ember.Controller.extend({
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  actions: {
    signUp: function() {
      var _this = this;
      var user = {
        email: this.get('email'),
        password: this.get('password'),
        password_confirmation: this.get('password'),
      };
      request('/users', {
        type: "POST",
        data: {user: user},
        dataType: 'json'
      }).then(function(response){
        _this.get("auth").setupSession(response);
        _this.transitionToRoute('dashboard');
      });
    }
  }
});

export default SignupController;
