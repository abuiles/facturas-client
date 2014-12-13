import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('invoiceItem', {
      client: this.modelFor('clients.show'),
      payment: true
    });
  },
  renderTemplate: function(){
    this.render(
      'invoice-items/new',
      {
        into: 'clients/show',
        outlet: 'invoice-items',
        controller: 'invoice-items/payment'
      }
    );
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },
  actions: {
    save: function() {
      var model = this.get('controller.model');
      var _this = this;
      model.save().then(function() {
        var client = _this.modelFor('clients.show');
        client.get('invoiceItems').pushObject(model);
        _this.transitionTo('invoice_items');
      });
    },
    cancel: function() {
      var _this = this;
      _this.transitionTo('invoice_items');
    }
  }
});
