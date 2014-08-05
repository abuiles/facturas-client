/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');


var app = new EmberApp({
  fingerprint: {
    prepend: 'https://d29bb5msqib8gy.cloudfront.net/facturas-client/'
  },
  minifyCSS: {
    enabled: true,
    options: {}
  }
});

app.import('vendor/custom-plugins/_ember-devise-simple-auth.js', {
  exports: {
    'ember-devise-simple-auth': [
      'default'
    ]
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

app.import('bower_components/rails-csrf/dist/named-amd/main.js', {
  exports: {
    'rails-csrf': [
      'service',
      'setCsrfUrl'
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
app.import('bower_components/ember-test-helpers/dist/ember-test-helpers.js');
app.import('vendor/custom-plugins/_amdize.js');

module.exports = app.toTree();
