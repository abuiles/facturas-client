/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');


var app = new EmberApp({
  vendorFiles: {
    'handlebars.js': null
  },
  fingerprint: {
    prepend: 'https://d29bb5msqib8gy.cloudfront.net/facturas-client/'
  },
  minifyCSS: {
    enabled: true,
    options: {}
  }
});

app.import('bower_components/accounting/accounting.js', {
  exports: {
    'accounting': ['formatMoney']
  },
  deanonymize: true,
  name: 'accounting'
});

app.import('bower_components/momentjs/min/moment-with-langs.min.js', {
  exports: {
    'moment': [
      'default'
    ]
  }
});

app.import('bower_components/chartjs/Chart.js', {
  exports: {
    'chart': [
      'default'
    ]
  }
});

app.import('vendor/custom-plugins/_amdize.js');

module.exports = app.toTree();
