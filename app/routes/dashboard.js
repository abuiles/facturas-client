import { request } from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return request('api/v1/dashboard');
  }
});
