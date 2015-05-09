'use strict';

module.exports = waterfallStart;

function waterfallStart() {
  // Grab the arguments
  var args = Array.prototype.slice.call(arguments);

  // Add a null error
  args.unshift(null);

  // Call the callback
  return function passArgs(cb) {
    cb.apply(null, args);
  };
}
