// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: express-example-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var express = require('express');
var fmt = require('util').format;

module.exports = function() {
  var app = express();

  app.get('/', function(req, res) {
    var s = req.socket;
    var msg = fmt('Hello, World! Request served from %s:%d\n',
      s.localAddress, s.localPort);
    res.send(msg);
  });

  app.get('/api', function(req, res) {
    res.json({
      message: 'Hello, World!',
      pid: process.pid,
      address: req.socket.localAddress,
      port: req.socket.localPort,
    });
  });

  return app;
};
