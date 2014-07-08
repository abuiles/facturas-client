export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('client');
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
      model.save().then(function(model) {
        _this.transitionTo('clients.show', model);
      });
    },
    cancel: function() {
      this.transitionTo('clients.index');
    }
  }
});
