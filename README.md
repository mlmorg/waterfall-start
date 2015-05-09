# waterfall-start

[![build status][build-png]][build]
[![Davis Dependency status][dep-png]][dep]

[![NPM][npm-png]][npm]

Helper to pass arguments at the start of an async waterfall.

## Example

```js
var waterfall = require('run-waterfall');
var start = require('waterfall-start');

waterfall([
  start('foo', 'bar')
], function onComplete(err, arg1, arg2) {
  // arg1 === 'foo'
  // arg2 === 'bar'
});
```

## Installation

`npm install waterfall-start`

## Tests

`npm test`

## NPM scripts

 - `npm run cover` This runs the tests with code coverage
 - `npm run lint` This will run the linter on your code
 - `npm test` This will run the tests.
 - `npm run trace` This will run your tests in tracing mode.
 - `npm run travis` This is run by travis.CI to run your tests
 - `npm run view-cover` This will show code coverage in a browser

## Contributors

 - Matt Morgan

## MIT Licenced

  [build-png]: https://secure.travis-ci.org/mlmorg/waterfall-start.png
  [build]: https://travis-ci.org/mlmorg/waterfall-start
  [dep-png]: https://david-dm.org/mlmorg/waterfall-start.png
  [dep]: https://david-dm.org/mlmorg/waterfall-start
  [npm-png]: https://nodei.co/npm/waterfall-start.png?stars&downloads
  [npm]: https://nodei.co/npm/waterfall-start
