console.log = () => {};
const assert = require('chai').assert;
const Structured = require('structured');
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function() {
  it('', function() {
    let appGetStruct = function() {
      app.get($path, $fn);
    };

    let varCallbacks = [
      function($path) {
        if ($path.value !== '/expressions') {
          return {
            failure: `Did you set up a GET handler for /expressions?`
          }
        } else {
          return true;
        }
      },
      function($fn) {
        if ($fn.type !== 'ArrowFunctionExpression') {
          return { failure: 'Did you include an arrow function callback for `app.get`?'};
        } else if ($fn.params.length !== 3) {
          return { failure: 'Did you provide three arguments to the route handler callback?'};
        } else {
          return true;
        }
      }
    ];

    let isMatch = Structured.match(code, appGetStruct, {varCallbacks});
    let failure = varCallbacks.failure || 'Did you use `app.get` with a path and a callback function?';
    assert.isOk(isMatch, failure);

    let finalStruct = function() {
      app.get($path, ($req, $res, $next) => {
        console.log($req);
      });

      let finalMatch = Structured.match(code, finalStruct);
      assert.isOk(finalMatch, 'Did you log the `req` object in the GET /expressions route?');
    }
  });
});
