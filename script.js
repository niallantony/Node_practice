const LinkedList = require('./modules/linkedlist');
const sorts = require('./modules/sorts');
const bst = require('./modules/bst');
const functions = require('./modules/functions');




// Demonstration of a Balanced Binary Search Tree
const BST = bst.binarySearchTree([1,24,5,3,34,3,1,7,34,7,3,1,312,34,23,67,3,46,84,137,95,33,35,26]);
BST.printTree();
BST.deleteNode(5);
BST.printTree();
BST.deleteNode(26);
BST.printTree();
console.log(BST.find(35));
// console.log(BST.levelOrderIterative());
// console.log(BST.levelOrderRecursive());
// console.log(BST.levelOrderRecursive((data) => data*2));
// BST.printTree();
// console.log(BST.inOrder());
// console.log(BST.preOrder());
// console.log(BST.postOrder());
// const twentyThree = BST.find(46);
// console.log(BST.height(twentyThree));
// console.log(BST.depth(twentyThree));
console.log(BST.isBalanced())
BST.rebalance();
BST.printTree();


// // Demonstration of a merge sort
// const unsorted = [2,6,42,46,8,3,1,5,4];
// const sorted = sorts.mergeSort(unsorted);
// console.log("Sorted: ", sorted)
// console.log("Unsorted: ", unsorted)

// // Demonstartion of various functions
// const removeDups = functions.removeDuplicates([1,2,5,2,4,1,5,6,78,2]);
// console.log(removeDups);

// // Demonstration of various methods for Linked Lists
// const shoppingList = LinkedList.LinkedList();
// shoppingList.append('Meat');
// shoppingList.append('Bread');
// shoppingList.append('Coffee');
// shoppingList.append('Cheese');
// console.log(shoppingList.toString());
// console.log("Element 1: ", shoppingList.at(1).data);
// console.log("Head: ",shoppingList.head().data)
// shoppingList.prepend('Orange Juice');
// console.log("Head: ",shoppingList.head().data)
// console.log(shoppingList.toString());
// shoppingList.pop();
// console.log(shoppingList.toString());
// console.log("Contains Coffee? ", shoppingList.contains("Coffee"))
// console.log("Where is Coffee? ", shoppingList.find("Coffee"))
// console.log("Contains Tea? ", shoppingList.contains("Tea"))
// shoppingList.insertAt("Jam",2);
// console.log(shoppingList.toString());
// shoppingList.removeAt(3);
// console.log(shoppingList.toString());