var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


stackMethods = {};

stackMethods.push = function(value) {
  var size = this.size();
  this[size] = value;
};

stackMethods.pop = function(value) {
  var size = this.size();
  removedProperty = this[size - 1];
  delete this[size - 1];
  return removedProperty;
};

stackMethods.size = function() {
  var size = 0;
  for (var key in this) {
    size++;
  }
  return size - 3;
};