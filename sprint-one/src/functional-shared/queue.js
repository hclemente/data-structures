var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueStack = {};
  extend(queueStack, queueMethods);

  return queueStack;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.size()] = value;
};

queueMethods.dequeue = function (value) {

};

queueMethods.size = function () {
  var size = 0;
  for (var key in this) {
    size++;
  }
  return size - 3;
};

