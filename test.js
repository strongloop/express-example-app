'use strict';

var app = require('./')();
var format = require('url').format;
var request = require('request');
var tap = require('tap');

var server;

function url(path) {
  return format({
    protocol: 'http',
    hostname: 'localhost',
    port: server.address().port,
    pathname: path
  });
}

tap.test('start', function(t) {
  t.plan(1);

  server = app.listen(0, function() {
    t.assert(server, 'listening');
  });
});

tap.test('test /', function(t) {
  t.plan(2);
  request(url(), function(err, rsp, body) {
    t.ifError(err);
    t.equal(body, 'Hello World', body);
  });
});

tap.test('test /api', function(t) {
  t.plan(2);
  request({url: url('/api'), json: true}, function(err, rsp, body) {
    t.ifError(err);
    t.equal(body.message, 'Hello World', body);
  });
});

tap.test('stop', function(t) {
  t.plan(1);
  server.close(function() {
    t.assert(true, 'closed');
  });
});
