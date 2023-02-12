'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  return function(b) {
    const result = a + b;

    return !isNaN(result) ? makeInfinityAdder(result) : a;
  };
}

module.exports = makeInfinityAdder;
