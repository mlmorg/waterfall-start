'use strict';
var test = require('tape');
var waterfall = require('run-waterfall');

var start = require('../');

test('multiple arguments', function t(assert) {
  waterfall([
    start('foo', 'bar')
  ], function onComplete(err, arg1, arg2) {
    assert.ifError(err,
      'does not error');
    assert.equal(arg1, 'foo',
      'first argument is passed correctly');
    assert.equal(arg2, 'bar',
      'other arguments are passed correctly');

    assert.end();
  });
});
