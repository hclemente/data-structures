var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  for (var key in this) {
    if (key !== 'size' && key !== 'enqueue' && key !== 'dequeue') {
      keyRenew = Number(key);
      keyRenew++;
      this[keyRenew] = this[key];
    }
  }
  this['0'] = value;
};

queueMethods.dequeue = function () {
  var removedKey = this[this.size() - 1];
  delete this[this.size() - 1];
  return removedKey;
};

queueMethods.size = function () {
  var size = 0;
  for (var key in this) {
    if (!isNaN(key)) {
      size++;
    }
  }
  return size;
};
