'use strict';

var express = require('express');

module.exports = function() {
  var app = express();

  app.get('/', function(req, res) {
    res.send('Hello World');
  });

  app.get('/api', function(req, res) {
    res.json({
      message: 'Hello World',
    });
  });

  return app;
};
