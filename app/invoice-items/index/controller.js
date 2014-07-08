export default Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: false,
  total: function(){
    var debts = this.get('model').filterBy('payment', false).reduce(
      function(previousValue, item){ return previousValue + item.get('amount'); },
      0
    );

    var payments = this.get('model').filterBy('payment', true).reduce(
      function(previousValue, item){ return previousValue + item.get('amount'); },
      0
    );

    return debts - payments;
  }.property('content.[]')
});
