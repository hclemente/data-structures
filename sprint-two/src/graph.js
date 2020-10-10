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
 * @param none
 * @returns {Object} graph, a new Graph instance
 */
// Constructor: get a new graph
var Graph = function() {
  this.nodes = {}; // {'cat': ['house', 4], 4: ['house'], 'house': ['cat']}
};

/**
 * @param {any} node
 * @returns nothing
 */
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = []; // addNode(1) --> this.nodes = {'1': []}, 1 !== '1', toString()
};

/**
 * @param {any}
 * @returns {boolean}
 */
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.nodes).includes(node.toString());
};

/**
 * @param {any} fromNode
 * @param {any} toNode
 * @returns none
 */
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode !== toNode) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

/**
 *
 */
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode);
};

/**
 * @param {any}, toNode
 * @returns {boolean} edgeExists, is there an edge between fromNode and toNode?
 * @param {any} fromNode
 * @param {any} toNode
 * @returns none
 */
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var iToNode = this.nodes[fromNode].indexOf(toNode);
  var iFromNode = this.nodes[toNode].indexOf(fromNode);
  this.nodes[fromNode].splice(iToNode, 1);
  this.nodes[toNode].splice(iFromNode, 1);
};

/**
 * @param {function} cb
 * @returns none
 */
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var context = this;
  for (var node in this.nodes) {
    cb(node);
  }
};

/**
 * @param {any} node, the node to remove
 * @returns none
 */
// May depend on:
//  nodes having edges in the first place
//  removeEdge
//
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // delete node from the nodes object
  // remove all edges to/from node which exist in other nodes
  delete this.nodes[node];

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


