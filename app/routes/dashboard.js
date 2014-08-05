import Ember from 'ember';

import Ember from 'ember';

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('report');
  },
  setupController: function(controller) {
    this._super.apply(this, arguments);
    var meta = this.store.metadataFor('report');

    controller.set('balance', meta.balance);
    controller.set('debtors', meta.debtors);
  }
});
