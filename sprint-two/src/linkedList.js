/**
 * @explanation
 *   If you had an array where you were adding and removing data often,
 *   it would be ideal to have a linkedList data structure.
 *   Systems Effects:
 *    Insertions and deletions are cheaper than with arrays.
 *    The memory usage will be larger than with an array.
 *   Behavior:
 *     Take any data input and store it in a newly created node in the linkedlist structure
 */

/**
  *  list:
  *     {
  *       head: pointer to first Node (initalize as null)
  *       tail: pointer to last Node (also initalize as null)
  *     }
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
    // Add a node to the linked list
    // debugger;
    var newNode = Node(value);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (list.head === null) {
      list.head = newNode;
    }
  };

  /**
   * @param none
   * @returns {any} the value which was in the head node
   * @sideEffect modifies the linked list in-place
   */
  list.removeHead = function() {
    // debugger;
    var value = this.head.value;
    this.head = this.head.next;
    return value;
  };

  /**
   * @param {any} target
   * @returns {boolean} returns true if target is in a node in the linked list
   */
  list.contains = function(target) {
    var node = this.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
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
