const mergeSort = require('./sorts');



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
        try {
            if (!isSorted(array)) array = mergeSort.mergeSort(array);
        } catch {
            throw new Error("No sorting available")
        }
        array = removeDuplicates(array);
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
        if (succParent !== node) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }
        //Swap the data and delete that sucker! I mean... successor!
        node.data = succ.data;
        delete succ;
        return node;
    }

    const levelOrderIterative = (cb) => {
        const queue = [];
        const array = [];
        queue.push(root);
        while (queue.length) {
            const current = queue[0];
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            if (cb) current.data = cb(current.data);
            array.push(queue.shift().data)
        }
        return array;  
    }

    const levelOrder = (cb) => {
        const queue = [];
        const array = [];
        const handle = () => {
            const element = queue[0];
            if (element.left) queue.push(element.left);
            if (element.right) queue.push(element.right);
            if (cb) element.data = cb(element.data);
            array.push(queue.shift().data);
            if (queue.length) handle(queue[0]);
        }
        queue.push(root);
        handle();
        return array;
    }

    const inOrder = (cb) => {
        const array = [];
        const handle = (current) => {
            if (current.left) {
                handle(current.left);
            }
            if (cb) current.data = cb(current.data);
            array.push(current.data);
            if (current.right) {
                handle(current.right);
            };
        }
        handle(root);
        return array;
    }
    const preOrder = (cb) => {
        const array = [];
        const handle = (current) => {
            if (cb) current.data = cb(current.data);
            array.push(current.data);
            if (current.left) {
                handle(current.left);
            }
            if (current.right) {
                handle(current.right);
            };
        }
        handle(root);
        return array;
    }
    const postOrder = (cb) => {
        const array = [];
        const handle = (current) => {
            if (current.left) {
                handle(current.left);
            }
            if (current.right) {
                handle(current.right);
            };
            if (cb) current.data = cb(current.data);
            array.push(current.data);
        }
        handle(root);
        return array;
    }

    const height = (node, h = 0) => {
        if (!node) {
            console.warn("Not a node");
            return;
        }
        let h1 = h;
        if (node.left) {
            h1 = height(node.left, h+1);
        }
        if (node.right) {
            h1 = height(node.right, h+1) > h1 ? height(node.right, h+1) : h1 ;
        }
        return h1;
    }

    const depth = (node, nextNode = root, d = 0) => {
        if (!node) {
            console.warn("Not a node");
            return; 
        }
        if (nextNode === node) return d;
        if (node.data < nextNode.data && nextNode.left) {
            return depth(node, nextNode.left, d+1);
        } else if (nextNode.right) return depth(node, nextNode.right, d+1);
    }

    const isBalanced = (node = root) => {
        // If node doesn't exist or doesn't have any children return BALANCED
        if (!node || (!node.left && !node.right)) return true;

        // Get the heights of each subtree by measuring the height of children plus 1 (or 0 if no children)
        const leftHeight = node.left ? height(node.left) +1 : 0 ;
        const rightHeight = node.right ? height(node.right) +1 : 0 ;

        // Get the difference and return UNBALANCED if greater than 1
        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        // Call recursively passing any UNBALANCED values up the chain with an AND operator
        return (isBalanced(node.left) && isBalanced(node.right))
    }

    const rebalance = () => {
        const sortedArray = inOrder();
        root = constructSubTrees(sortedArray);
    }

    const removeDuplicates = (array) => {
        const newArray = [];
        for ( let i = 0 ; i < array.length ; i++ ) {
            if (!newArray.includes(array[i])) {
                newArray.push(array[i]);
            } 
        }
        return newArray
    }

    
    const printTree = () => {
        prettyPrint(root);
        console.log(`   ----   `)
    }

    let root = arrayToBST(array);
    return {
        printTree,
        insert,
        deleteNode,
        find,
        levelOrder,
        inOrder,
        preOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        rebalance
    }

}