/**
 * @justification
 *  A graph is a map of non-hierarchical connections between Nodes.
 *  Graphs are useful to model information where relationships between Nodes are relatively
 *  unpredictable.
 *
 * @explanation
 *  You can create Nodes to hold any data.
 *  You can create an edge between any two Nodes.
 *  This will be a undirected graph: all connectiions are two-way. You could make other types.
 */

/**
 * @param {any} value, the value stored in this GraphNode
 */
var GraphNode = function(value) {
  this.value = value;
  // this.edges = [];
};

/**
 *
 */
GraphNode.prototype.getValue = function() {
  return this.value;
};

/**
 * @param none
 * @returns {Object} graph, a new Graph instance
 */
// Constructor: get a new graph
var Graph = function() {
  this.nodesList = [];
  this.edgesList = [];
};

Graph.prototype.getNodeByValue = function(value) {
  for (var i = 0; i < this.nodesList.length; i++) {
    if (this.nodesList[i].getValue() === value) {
      return this.nodesList[i];
    }
  }
};

/**
 * @param {any} value
 * @returns nothing
 */
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var newNode = new GraphNode(value);
  this.nodesList.push(newNode);
};

/**
 * @param {any} value
 * @returns {boolean}
 */
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for (var i = 0; i < this.nodesList.length; i++) {
    if (this.nodesList[i].getValue() === value) {
      return true;
    }
  }
  return false;
};

/**
 * @param {any} v1, the value of a node on one side of the edge
 * @param {any} v2, the value of the node on the other side
 * @returns none
 */
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(v1, v2) {
  var node1 = this.getNodeByValue(v1);
  var node2 = this.getNodeByValue(v2);
  this.edgesList.push([node1, node2]);
};

/**
 *
 */
Graph.prototype.hasEdge = function(v1, v2) {
  for (var i = 0; i < this.edgesList.length; i++) {
    var currentEdge = this.edgesList[i];
    var currentEdgeValues = [currentEdge[0].getValue(), currentEdge[1].getValue()];
    if (currentEdgeValues.includes(v1) && currentEdgeValues.includes(v2)) {
      return true;
    }
  }
  return false;
};

/**
 * @param {any} v1
 * @param {any} v2
 */
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(v1, v2) {
  // var node1 = this.getNodeByValue(v1);
  // var node2 = this.getNodeByValue(v2);
  for (var i = 0; i < this.edgesList.length; i++) {
    var currentEdge = this.edgesList[i];
    var currentEdgeValues = [currentEdge[0].getValue(), currentEdge[1].getValue()];
    if (currentEdgeValues.includes(v1) && currentEdgeValues.includes(v2)) {
      this.edgesList.splice(i, 1);
      break;
    }
  }
};

/**
 * @param {function} cb
 * @returns none
 */
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodesList.forEach(node => cb(node.getValue()));
};

/**
 * @param {any} node, the node to remove
 * @returns none
 */
Graph.prototype.removeNode = function(value) {
  for (var i = 0; i < this.nodesList.length; i++) {
    var currentNode = this.nodesList[i];
    if (currentNode.getValue() === value) {
      this.nodesList.splice(i, 1);
      break;
    }
  }
  for (var j = 0; j < this.edgesList.length; j++) {
    var currentEdge = this.edgesList[j];
    var currentEdgeValues = [currentEdge[0].getValue(), currentEdge[1].getValue()];
    if (currentEdgeValues.includes(value)) {
      this.edgesList.splice(j, 1);
      j = j - 1;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


