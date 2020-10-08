class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sized = 0;
  }

  enqueue(value) {
    for (var key in this) {
      if (key !== 'size' && key !== 'enqueue' && key !== 'dequeue') {
        var keyRenew = Number(key);
        keyRenew++;
        this[keyRenew] = this[key];
      }
    }
    this['0'] = value;
  }

  dequeue() {
    var removedKey = this[this.size() - 1];
    delete this[this.size() - 1];
    return removedKey;
  }

  size() {
    var size = 0;
    for (var key in this) {
      if (!isNaN(key)) {
        size++;
      }
    }
    this.sized = size;
    return size;
  }
}

