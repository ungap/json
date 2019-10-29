/*! (c) Andrea Giammarchi - ISC */
var self = this || /* istanbul ignore next */ {};
(function (JSON) {
  var u2028 = '\u2028';
  var low = /^[\uD800-\uDBFF]$/;
  var high =  /^[\uDC00-\uDFFF]$/;
  var re = /[\u2028\u2029\uD800-\uDFFF]/g;
  var stringify = JSON.stringify;
  self.JSON = stringify(u2028) === ('"' + u2028 + '"') ?
    {
      parse: JSON.parse,
      stringify: function (value, replacer, space) {
        return stringify.apply(null, arguments).replace(re, place);
      }
    } :
    JSON;
  function place(match, offset, string) {
    return (
      match === u2028 ||
      match === '\u2029' ||
      notWellFormed(match, offset, string)
    ) ?
      ('\\u' + match.charCodeAt(0).toString(16)) :
      match;
  }
  function notWellFormed(match, offset, string) {
    var before = string.charAt(offset - 1);
    var after = string.charAt(offset + 1);
    return (
      (low.test(match) && !high.test(after)) ||
      (high.test(match) && !low.test(before))
    );
  }
}(JSON));
