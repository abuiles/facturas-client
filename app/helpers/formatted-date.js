import moment from 'moment';

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).format('LL');
});
