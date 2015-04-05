import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
