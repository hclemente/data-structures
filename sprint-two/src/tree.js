/**
 * @justification
 *   A data structure which models container-content relationships.
 *   You can navigate the elements according the structure of the contaienr-content relationships.
 * @explanation
 *  You can build a tree strucutre to contain any data.
 */

/**
 *  @param {any} value
 *  @returns {Object} newTree
 */
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // fixed?
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

/**
 * @param {any} value
 * @returns nothing
 * @sideEffect modifies the tree
 */
treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

/**
 *  @param {any} target
 *  @returns {boolean} targetInTree, true if the tree has a node containing that target
 */
treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  if (this.children.length === 0) {
    return false;
  } else { // then node has children...
    return _.any(this.children, function(child) {
      return child.contains(target);
    }, this);

  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 /**
  *   make a new tree w/ some value: var myTree = new Tree(value);
  *   add a child to my tree: myTree.addChild(value);
  */