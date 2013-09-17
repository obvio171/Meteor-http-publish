Package.describe({
    summary: '\u001b[32mv0.0.1\n'+
         '\u001b[33m-----------------------------------------\n'+
         '\u001b[0m Adds HTTP.publish  and HTTP.unpublish    \n'+
         '\u001b[0m                                          \n'+
         '\u001b[33m-------------------------------------RaiX\n'
});

Package.on_use(function(api) {
  'use strict';
  api.use(['webapp', 'underscore', 'ejson', 'random'], 'server');

  api.use('http-methods');

  api.imply && api.imply('http-methods');

  api.export && api.export('_publishHTTP', { testOnly: true });

  api.add_files('http.publish.client.api.js', 'client');
  api.add_files('http.publish.server.api.js', 'server');

});

Package.on_test(function (api) {
  api.use('http-publish', ['client', 'server']);
  api.use('test-helpers', ['client', 'server']);
  api.use('http', 'client');

  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('http.publish.tests.server.js', 'server');
  api.add_files('http.publish.tests.client.js', 'client');
});
