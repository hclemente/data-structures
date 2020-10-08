var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);
  return newStack;

};

var stackMethods = {};

stackMethods.push = function (value) {
  this[this.size()] = value;
};

stackMethods.pop = function () {
  var removedKey = this[this.size() - 1];
  delete this[this.size() - 1];
  return removedKey;
};

stackMethods.size = function () {
  var size = 0;
  for (var key in this) {
    if (!isNaN(key)) {
      size++;
    }
  }
  return size;
};