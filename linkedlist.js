
const LinkedNode = (data = null) => {
    return {
        data,
        nextNode:null
    }
}

exports.LinkedList = () => {
    const list = {};

    const append = (value) => {
        const newNode = LinkedNode(value);
        size() ? tail().nextNode = newNode : list.head = newNode ;
    }

    const prepend = (value) => {
        const newNode = LinkedNode(value);
        newNode.nextNode = list.head;
        list.head = newNode;
    }

    const size = () => {
        return Object.keys(list).length;
    }

    const head = () => {
        return list.head;
    }

    const tail = (node = list.head) => {
        if (node.nextNode == null) return node;
        return tail(node.nextNode);
    }
    
    const at = (index, node = list.head) => {
        if (!index) return node;
        if (!node.nextNode) return null;
        return at(index - 1, node.nextNode);
    }

    const pop = (node = list.head) => {
        if (node.nextNode.nextNode == null) { 
            delete node.nextNode;
            return;
        }
        pop(node.nextNode);
    }

    const contains = (data, node = list.head) => {
        if (node.data == data) return true;
        if (!node.nextNode) return false;
        return contains(data,node.nextNode);
    }

    const find = (data, index = 0, node = list.head) => {
        if (node.data == data) return index;
        if (!node.nextNode) return "Element doesn't exist!";
        return find(data,index + 1,node.nextNode);
    }

    const toString = (node = list.head) => {
        if (!node.nextNode) return `${node.data} -> null`;
        return `${node.data} -> `.concat(toString(node.nextNode))
    }

    const insertAt = (data, index) => {
        if (!at(index)) return "Index out of range";
        const newNode = LinkedNode(data);
        const before = at(index-1);
        const after = at(index);
        before.nextNode = newNode;
        newNode.nextNode = after;
    }

    const removeAt = (index) => {
        if (!at(index)) return "No such element"
        const before = at(index-1);
        const after = at(index).nextNode;
        before.nextNode = after;
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        toString,
        contains,
        find,
        insertAt,
        removeAt,
    }
}




