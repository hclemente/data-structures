var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sized = 0;
};

Stack.prototype.push = function (value) {
  this[this.size()] = value;
};

Stack.prototype.pop = function () {
  var removedKey = this[this.size() - 1];
  delete this[this.size() - 1];
  return removedKey;
};

Stack.prototype.size = function () {
  var size = 0;
  for (var key in this) {
    if (!isNaN(key)) {
      size++;
    }
  }
  this.sized = size;
  return size;
};
