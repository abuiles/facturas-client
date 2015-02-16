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

app.import('vendor/list-view.amd.js', {
  exports: {
    'list-view/main': ['default'],
    'list-view/helper': ['default'],
    'list-view/list_item_view': ['default'],
    'list-view/list_item_view_mixin': ['default'],
    'list-view/list_view': ['default'],
    'list-view/list_view_helper': ['default'],
    'list-view/list_view_mixin': ['default']
  }
});

module.exports = app.toTree();
