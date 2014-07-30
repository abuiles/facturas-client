import Ember from 'ember';
import Chart from 'chart';

export default Ember.View.extend({
  draw: function() {
    var ctx=  this.$('.balance-chart')[0].getContext("2d");
    new Chart(ctx).Line(this.get('controller').get('data'));
  }.on('didInsertElement')
});
