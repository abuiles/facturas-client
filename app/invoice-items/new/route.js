export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('invoiceItem', {
      client: this.modelFor('clients.show')
    });
  },
  renderTemplate: function(){
    this.render('invoiceItems/new', {  into: 'clients/show', outlet: 'invoice-items' });
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
        _this.transitionTo('clients.show', client);
      });
    },
    cancel: function() {
      var _this = this;
      _this.transitionTo('clients.show', _this.modelFor('clients.show'));
    }
  }
});
