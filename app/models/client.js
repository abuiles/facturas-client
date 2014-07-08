export default DS.Model.extend({
  balance: DS.attr('number'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  invoiceItems: DS.hasMany('invoiceItem', {async: true}),
  fullName: function() {
    return '%@ %@'.fmt(this.get('firstName'), this.get('lastName'));
  }.property('firstName', 'lastName')
});
