import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('clients.show').get('invoiceItems');
  },
  renderTemplate: function(){
    return this.render('invoiceItems/index', {
      into: 'clients/show',
      outlet: 'invoice-items'
    });
  }
});
