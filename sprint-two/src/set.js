var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var i = this._storage.indexOf(item);
  if (i !== -1) {
    this._storage.splice(i, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
