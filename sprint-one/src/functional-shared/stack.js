var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.size = 0;
  extend(Stack, stackMethods);
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

Stack.stackMethods.push = function(value) {

};

Stack.stackMethods.pop = function(value) {

};

Stack.stackMethods.size = function(value) {

};