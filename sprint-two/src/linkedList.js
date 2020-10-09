/**
 *
 */

var LinkedList = function() {
  var list = {}; // this object holds the linked list: it is an array of Node objects + 2x references
  list.head = null; // this reference points to the first Node object in the list
  list.tail = null; // this reference points to the last Node object in the list

  /**
   * @param {any} value, the value which will be added to the end of the lined list
   * @sideEffect modifies the linked list in-place
   */
  list.addToTail = function(value) {
  };

  /**
   * @param none
   * @returns {any} the value which was in the head node
   * @sideEffect modifies the linked list in-place
   */
  list.removeHead = function() {
  };

  /**
   * @param {any} target
   * @returns {boolean} returns true if target is in a node in the linked list
   */
  list.contains = function(target) {
  };

  return list;
};

/**
 * @param {any} value
 * @returns {Node}
 */
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
