var q = require('q');
var _ = require('underscore');

browser.addCommand('waitForVisibleAndClick', function (selector, message) {
  return this.waitForVisible(selector)
    .click(selector)
    .then(function () {
      if (message) {
        console.log(message);
      }
    });
});

browser.addCommand('waitALittle', function (time) {
  var deferred = q.defer();

  setTimeout(function () {
    deferred.resolve();
  }, time);

  return deferred.promise;
});

browser.addCommand('isAnySelected', function (selector) {
  return this.isSelected(selector)
    .then(function (isSelectedList) {
      return _.find(isSelectedList, function (isSelected) {
        return isSelected;
      }) || false;
    });
});
