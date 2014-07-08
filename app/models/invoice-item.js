export default DS.Model.extend({
  createdAt: DS.attr('date'),
  amount: DS.attr('number'),
  description: DS.attr('string'),
  client: DS.belongsTo('client'),
  payment: DS.attr('boolean')
});
