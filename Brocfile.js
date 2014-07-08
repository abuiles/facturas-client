/* global require, module */

var sh = require('execSync');
var shortSHA = sh.exec('git rev-parse HEAD | cut -c1-7').stdout.split('\n')[0];

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    prepend: 'https://d29bb5msqib8gy.cloudfront.net/' + shortSHA + '/'
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

app.import('vendor/accounting/accounting.js', {
  exports: {
    'accounting': ['formatMoney']
  },
  deanonymize: true,
  name: 'accounting'
});

app.import('vendor/momentjs/min/moment-with-langs.min.js', {
  exports: {
    'moment': [
      'default'
    ]
  }
});

app.import('vendor/rails-csrf/dist/named-amd/main.js', {
  exports: {
    'rails-csrf': [
      'service',
      'setCsrfUrl'
    ]
  }
});

app.import('vendor/ember-test-helpers/dist/ember-test-helpers.js');
app.import('vendor/custom-plugins/_amdize.js');

module.exports = app.toTree();
