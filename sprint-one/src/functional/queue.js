var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var size = someInstance.size(storage);
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var size = someInstance.size(storage);
    removedKey = storage[0];
    delete storage[0];
    for (var key in storage) {
      var valueToReassign = storage[key];
      var keyToDecrement = Number(key);
      keyToDecrement--;
      storage[keyToDecrement] = valueToReassign;
    }
    delete storage[size - 1];
    return removedKey;
  };

  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  };

  return someInstance;
};
