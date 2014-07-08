import { formatMoney }  from 'accounting';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return formatMoney(value);
});
