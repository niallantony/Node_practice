exports.mergeSort = (array) => {
    const copyArray = [...array]
    const merge = (array) => {
        if (array.length === 1) return array;
        const firstHalf = array.splice(0, Math.ceil(array.length/2));
        const sortedFirst = merge(firstHalf); 
        const sortedSecond = merge(array);
        const newArray = [];
        while (sortedFirst.length > 0 || sortedSecond.length > 0) {
            if (!sortedFirst.length) {
                newArray.push(sortedSecond.shift());
            } else if (!sortedSecond.length) {
                newArray.push(sortedFirst.shift());
            } else if (sortedFirst[0] < sortedSecond[0]) {
                newArray.push(sortedFirst.shift());
            } else {
                newArray.push(sortedSecond.shift());
            }
        }
        return newArray;
    }
    return merge(copyArray);
}