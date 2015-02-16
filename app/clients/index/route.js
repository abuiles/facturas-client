import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.all('client');
  },
  setupController: function() {
    this._super.apply(this, arguments);

    if (this.store.all('client').get('length') === 0) {
      this.store.find('client');
    }
  }
});
