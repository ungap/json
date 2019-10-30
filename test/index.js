var JSON = require('../cjs');
var stringify = JSON.stringify;
test();

global.JSON.stringify = function (v) {
  return stringify(v).replace(/\\(u2028|u2029|uD834|uDF06|uDEAD)/ig, (_, c) => {
    return unescape('%' + c);
  });
};

delete require.cache[require.resolve('../cjs')];
JSON = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
global.JSON.stringify = stringify;
JSON = require('../cjs');
test();

function test() {
  var a = ['\u2028', '\u2029'];
  var s = JSON.stringify(a);
  var p = JSON.parse(s);
  console.assert(s === '["\\u2028","\\u2029"]', '\\u2028 & \\u2029');
  console.assert(p.length === 2 && p[0] === a[0] && p[1] === a[1], 'same');
  console.assert(JSON.stringify('𝌆') === JSON.stringify('\uD834\uDF06'), '\\uD834\\uDF06');
  console.assert(JSON.stringify('\uD834\uD834\uDF06') === '"\\ud834𝌆"', '\\ud834𝌆');
  console.assert(JSON.stringify('\uD834\uDF06\uDF06') === '"𝌆\\udf06"', '𝌆\\udf06');
  console.assert(JSON.stringify('\uDF06\uD834') === '"\\udf06\\ud834"', '\\udf06\\ud834');
  console.assert(JSON.stringify('\uDEAD') === '"\\udead"', '\\udead');
}
