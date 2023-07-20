const mergeSort = require('./sorts');
const functions = require('./functions');


const Node = (data = null) => {
    return {
        data,
        left:null,
        right:null,
    }
}

exports.binarySearchTree = (array) => {

    const isSorted = (array) => {
        for (let i = 1 ; i < array.length ; i++) {
            if (array[i-1] > array [i]) return false;
        }
        return true;
    }

    const constructSubTrees = (array) => {
        if (array.length == 0) return null;
        const mid = Math.floor(array.length/2)
        const root = Node(array[mid]);
        root.left = constructSubTrees(array.slice(0,mid));
        root.right = constructSubTrees(array.slice(mid+1));
        return root; 
    }

    const arrayToBST = (array) => {
        if (!isSorted(array)) array = mergeSort.mergeSort(array);
        array = functions.removeDuplicates(array);
        console.log(array);
        return constructSubTrees(array); 
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };

    const insert = (value, node = root) => {
        if (node.data === value) {
            console.warn("Tree already contains value");
            return
        } 
        if (!node.data) return Node(value);
        const whereTo = value > node.data ? 'right' : 'left' ;       
        if(!node[whereTo]) {
            node[whereTo] = Node(value);
        } else {
            insert(value,node[whereTo]);
        }
    }

    const find = (value, node = root) => {
        if (node.data === value) return node;
        if (value < node.data && node.left) {
            return find(value, node.left);
        } else if (node.right) return find(value, node.right);
        return;
    }

    const deleteNode = (value, node = root) => {
        if (node === null) {
            return node;
        }

        // Goes through recursively until value is found in either child.
        if (value < node.data) {
            node.left = deleteNode(value, node.left);
            return node;
        } else if (value > node.data) {
            node.right = deleteNode(value, node.right);
            return node;
        }

        // Deletes leaf nodes
        if (!node.left && !node.right) {
            console.log(node)
            delete node;
            return null;
        }

        // Delete node with one child
        if (!node.left || !node.right) {
            const temp = !node.left ? node.right : node.left;
            delete node;
            return temp;
        }

        // Delete node with two children
        let succParent = node;
        let succ = node.right;
        // Go down the tree, looking for the lowest value on the right (assuming sorted), store the parent and the successor node.
        while (succ.left != null) {
            succParent = succ;
            succ = succParent.left;
        }
        // If the successor is the first element, then take its right child (if any) as the new right child of the parent, if not then take its right child and put it as the left child of its parent, because we know that its the left child if its not the child of our node to be deleted (Phew!)
        if (succParent != node) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }
        //Swap the data and delete that sucker! I mean... successor!
        node.data = succ.data;
        delete succ;
        return node;
    }

    
    const printTree = () => {
        prettyPrint(root);
        console.log(`   ----   `)
    }

    const root = arrayToBST(array);
    return {
        printTree,
        insert,
        deleteNode,
        find,
    }

}