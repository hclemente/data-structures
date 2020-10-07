var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = someInstance.size(storage);
    storage[size] = value;
  };

  someInstance.pop = function() {
    var size = someInstance.size(storage);

    removedKey = storage[size - 1];
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
