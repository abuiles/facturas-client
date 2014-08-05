import DS from 'ember-data';

export default DS.Model.extend({
  balance: DS.attr('number'),
  date: DS.attr('date'),
  debtors: DS.attr('number')
});
