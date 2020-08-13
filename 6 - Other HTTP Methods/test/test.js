console.log = () => {};
const assert = require('chai').assert;
const expect = require('chai').expect;
const Structured = require('structured');
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function() {
  it('', function() {
    let appPutStruct = function() {
      app.put($path, $fn);
    }

    let varCallbacks = [
      function($path) {
        if ($path.value !== '/expressions/:id') {
          return {
            failure: `Did you set up a PUT handler for /expressions/:id?`
          }
        } else {
          return true;
        }
      },
      function($fn) {
        if ($fn.type !== 'ArrowFunctionExpression') {
          return { failure: 'Did you include an arrow function callback for `app.put`?'};
        } else if ($fn.params.length !== 3) {
          return { failure: 'Did you provide three arguments to the route handler callback?'};
        } else {
          return true;
        }
      }
    ];

    let isMatch = Structured.match(code, appPutStruct, {varCallbacks});
    let failure = varCallbacks.failure || 'Did you use `app.put` with a path and a callback function?'
    assert.isOk(isMatch, failure);
  });
});
