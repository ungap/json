/*! (c) Andrea Giammarchi - ISC */
var self = this || /* istanbul ignore next */ {};
(function (JSON) {
  var u2028 = '\u2028';
  var re = /\u2028|\u2029/g;
  var stringify = JSON.stringify;
  self.JSON = stringify(u2028) === ('"' + u2028 + '"') ?
    {
      parse: JSON.parse,
      stringify: function (value, replacer, space) {
        return stringify.apply(null, arguments).replace(re, place);
      }
    } :
    JSON;
  function place(re) {
    return re === u2028 ? '\\u2028' : '\\u2029';
  }
}(JSON));
