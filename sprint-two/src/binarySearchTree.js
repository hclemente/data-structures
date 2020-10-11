/**
 *
 *
 */
var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  // debugger;
};

/**
 * @param
 */
BinarySearchTree.prototype.insert = function(value) {
  if (this.left === null && this.right === null) { // both don't exist
    if (this.value < value) {
      this.right = new BinarySearchTree(value);
    } else if (this.value > value) {
      this.left = new BinarySearchTree(value);
    }
  } else if (this.left === null) { // left doesn't exist, right does
    if (this.value < value) {
      this.left = new BinarySearchTree(value);
    } else if (this.value > value) {
      this.right.insert(value);
    }
  } else if (this.right === null) { // left exists, right doesn't
    if (this.value < value) {
      this.right = new BinarySearchTree(value);
    } else if (this.value > value) {
      this.left.insert(value);
    }
  } else /* both left and right exist */ {
    if (this.value < value) {
      // attach descending right
      this.right.insert(value);
    } else if (this.value > value) {
      // attach descending left
      this.left.insert(value);
    }
  }
};

/**
 *
 */
BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value < value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else if (this.value > value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }
};

/**
 *
 */
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // execute calback on value of current BinarySearchTree
  // access children an execute callback on them


  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
