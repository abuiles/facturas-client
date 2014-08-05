import Ember from 'ember';
import moment from 'moment';

export default Ember.ArrayController.extend({
  data: Ember.computed('model.[]', function() {
    var data = [] , labels = [];

    this.forEach(function(report) {
      data.push(report.get('balance'));
      labels.push(moment(report.get('date')).format('LL'));
    });

    return {
      labels: labels,
      datasets: [
        {
          label: "Balance (Historico)",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: data
        }
      ]
    };
  })
});
