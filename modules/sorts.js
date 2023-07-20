exports.mergeSort = (array) => {
    // Create a shallow copy, as to not mutate the original input
    const copyArray = [...array]
    const merge = (array) => {
        if (array.length === 1) return array;
        const firstHalf = array.splice(0, Math.ceil(array.length/2));
        // Recursively call on each half
        const sortedFirst = merge(firstHalf); 
        const sortedSecond = merge(array);
        const newArray = [];
        // Keep going for as long as there are still elements
        while (sortedFirst.length > 0 || sortedSecond.length > 0) {
            if (!sortedFirst.length) {
                // If nothing in first, push the element in second
                newArray.push(sortedSecond.shift());
            } else if (!sortedSecond.length) {
                // If nothing in second, push the element in first
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