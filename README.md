# CS Practice
A practice Repo for various algorithms or data structures built with javascript for practicing Computer Science concepts
Everything was created for my own practice, these are by no means fully optimised methods or functions, but I created everything myself.

## 🔗 Linked List

Make sure to include the follow code to import:
`const LinkedList = require('./linkedlist')`

Create a single linked list. Methods:
- `append(value)` - Add a node to the end of the list
- `prepend(value)` - Add a node to the start of the list
- `size()` - Returns the size of the list
- `head()` - Returns the node at the start of the list
- `tail()` - Returns the node at the end of the list
- `at(index)` - Returns the node at `index` in the list
- `pop()` - Removes the node at the end of the list
- `contains(value)` - Returns `true` if `value` is contained in the list, else returns `false`
- `find(value)` - Returns the index of `value`
- `toString()` - Returns the full list in the format `(VALUE) -> (VALUE) -> VALUE -> ...`
- `insertAt(value,index)` - Inserts and node with `value` at `index`
- `removeAt(index)` - Removes the node at `index`

## 🌳 Balanced Binary Search Tree

Make sure to include the following code to import:
`const bst = require('./modules/bst');`

Create a Balanced Binary Search Tree. Use the `binarySearchTree(array)` method, where `array` is the array to build. If array is not sorted then if `sorts.js` is present array will be merge sorted. 
Methods:
- `printTree()` - Pretty prints the tree in the console
- `insert(value)` - Inserts a `value` into the tree
- `deleteNode(value)` - Deletes a `value`, if it exists, from the tree
- `find(value)` - Finds a `value` in the tree
- `levelOrder(callback)` - Calls a callback function on each element and returns an array of elements in the tree through breadth first traversal
- `inOrder(callback)` - Calls a callback function on each element and returns an array of elements in the tree through in-order depth first traversal
- `preOrder(callback)` - Calls a callback function on each element and returns an array of elements in the tree through pre-order depth first traversal
- `postOrder(callback)` - Calls a callback function on each element and returns an array of elements in the tree through post-order depth first traversal
- `height(node)` - Returns the height (edges to travel to furthest leaf node) of a given `node`
- `depth(node)` - Returns the depth (edges to travel to root node) of a given `node`
- `isBalanced()` - Returns `true` if tree is balanced, else returns `false`
- `rebalance()` - Rebalances a tree.

## 🔁 Sorts

Make sure to include the follow code to import:
`const sorts = require('./sorts')`

Contains algorithms for sorting. Methods:
- `mergeSort(array)` - Uses Merge Sort to sort an array

## ♟️ Knight's Travails

Make sure to include the following code to import:
`const knightsTravails = require('./modules/knightstravail');`

Use function `.knightsTravails(location, destination)` where `location` and `destination` are given as chess notation in `string` format. For example:
`knightsTravails.knightsTravails("G1","A1");` would print:
`┌─────────┬────────┐`
`│ (index) │ Values │`
`├─────────┼────────┤`
`│    0    │  'G1'  │`
`│    1    │  'F3'  │`
`│    2    │  'E1'  │`
`│    3    │  'C2'  │`
`│    4    │  'A1'  │`
`└─────────┴────────┘`
` ♘ Reached destination in  5  moves. ♘`

