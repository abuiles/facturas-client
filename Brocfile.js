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

app.import('bower_components/chartjs/Chart.js', {
  exports: {
    'chart': [
      'default'
    ]
  }
});
app.import('vendor/custom-plugins/_amdize.js');

app.import('vendor/fontello/fontello.css');
app.import('vendor/fontello/font/fontello.ttf', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.eot', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.svg', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.woff', {
  destDir: 'assets/fonts'
});
app.import('bower_components/picnic/releases/v2.min.css');

module.exports = app.toTree();
