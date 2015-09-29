var assert = require('assert');
var _ = require('underscore');

_.mixin({
  assert: function (val) {
    assert(val);
    return val;
  },
  findTrue: _.partial(_.find, _, function (val) {
    return ! _.isEmpty(val) || !! val;
  })
});

module.exports = {
  assertAll: _.partial(_.map, _, _.assert),
  assertAny: _.compose(_.assert, _.findTrue)
};
