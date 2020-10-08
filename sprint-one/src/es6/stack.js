class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sized = 0;
  }

  push(value) {
    this[this.size()] = value;
  }

  pop() {
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