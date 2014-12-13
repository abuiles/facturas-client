import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('invoiceItem');
  },
  renderTemplate: function(){
    return this.render('invoiceItems/index', {
      into: 'clients/show',
      outlet: 'invoice-items'
    });
  }
});
