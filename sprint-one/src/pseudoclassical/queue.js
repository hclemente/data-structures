var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sized = 0;
};

Queue.prototype.enqueue = function (value) {
  for (var key in this) {
    if (key !== 'size' && key !== 'enqueue' && key !== 'dequeue') {
      var keyRenew = Number(key);
      keyRenew++;
      this[keyRenew] = this[key];
    }
  }
  this['0'] = value;
};

Queue.prototype.dequeue = function () {
  var removedKey = this[this.size() - 1];
  delete this[this.size() - 1];
  return removedKey;
};

Queue.prototype.size = function () {
  var size = 0;
  for (var key in this) {
    if (!isNaN(key)) {
      size++;
    }
  }
  this.sized = size;
  return size;
};