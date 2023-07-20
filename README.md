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

## 🔁 Sorts

Make sure to include the follow code to import:
`const sorts = require('./sorts')`

Contains algorithms for sorting. Methods:
- `mergeSort(array)` - Uses Merge Sort to sort an array
