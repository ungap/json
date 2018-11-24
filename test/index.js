var stringify = global.JSON.stringify;
var JSON = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];

global.JSON.stringify = stringify('\u2028') === '"\u2028"' ?
  JSON.stringify :
  function (v) {
    return stringify(v).replace(/\\u2028/g, '\u2028').replace(/\\u2029/g, '\u2029');
  }

JSON = require('../cjs');
test();

function test() {
  var a = ['\u2028', '\u2029'];
  var s = JSON.stringify(a);
  var p = JSON.parse(s);
  console.assert(s === '["\\u2028","\\u2029"]');
  console.assert(p.length === 2 && p[0] === a[0] && p[1] === a[1]);
}
