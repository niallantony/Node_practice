function sumRange(n) {
    if (n == 0) return n
    return n + sumRange(n-1);
}

function power(n,x) {
    if (x == 1) return n
    return n * power(n,x-1);
}

function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n-1);
}

function all(array,cb) {
    const copy = array.slice();

    if(copy.length === 0) return true;
    if(cb(copy[copy.length-1])) {
        copy.pop();
        return all(copy,cb);
    } else {
        return false;
    }
}

function productOfArray(array) {
    if(array.length === 0) return 1;
    return array.pop() * productOfArray(array);
}

function contains(object,value) {
    for (let key in object) {
        if (object[key] === value) return true;
        if (typeof object[key] === 'object') {
            return contains(object[key],value)
        } 
    }
    return false
}

function totalIntegers(array) {
    if (typeof array === 'number') return 1;
    if (typeof array != 'object') return 0;
    let count = 0;
    array.forEach((x) => count += totalIntegers(x))
    return count;
}

function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}

function replicate(copies,value) {
    if (copies <= 0 ) return [];
    return [value].concat(replicate(copies-1, value));
}

function iterativeFib(n) {
    const fib = [];
    if (n === 0) return [];
    for (let i = 0 ; i < n ; i++ ) {
        if (i < 2) {
            fib.push(1);
        } else {
            fib.push(fib[i-2] + fib[i-1])
        }
    }
    return fib;
}

function recursiveFib(n) {
    if ( n <= 2 ) return n === 0 ? [] : n === 1 ? [1] : [1,1];
    return recursiveFib(n-1).concat(recursiveFib(n-1)[n-2] + recursiveFib(n-1)[n-3]);
}      

function mergeSort(array) {
    if (array.length === 1) return array;
    mergecounter++
    console.log(mergecounter,' : Splitting... ', array)
    const firstHalf = array.splice(0, Math.ceil(array.length/2));
    const sortedFirst = mergeSort(firstHalf); 
    const sortedSecond = mergeSort(array);
    const newArray = [];
    while (sortedFirst.length > 0 || sortedSecond.length > 0) {
        if (!sortedFirst.length) {
            newArray.push(sortedSecond.shift());
        } else if (!sortedSecond.length) {
            newArray.push(sortedFirst.shift());
        } else if (sortedFirst[0] < sortedSecond[0]) {
            mergecounter++
            console.log(mergecounter,' : Comparing... ', sortedFirst[0], '&' , sortedSecond[0]);    
            newArray.push(sortedFirst.shift());
        } else {
            mergecounter++
            console.log(mergecounter,' : Comparing... ', sortedFirst[0], '&' , sortedSecond[0]);    
            newArray.push(sortedSecond.shift());
        }
    }
    return newArray;
}

const allAreLessThanSeven = all([1,2,6], function(num) {
    return num < 7;
});
const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);
const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
const  l = [1,2,3]; 

console.log("Merge sort 2 : ", mergeSort([8,7,6,5,4,3,2,1]))
console.log(mergecounter);
// console.log("Recursive Fib: ", recursiveFib(5));
// console.log("Iterative Fib: ", iterativeFib(16));
// console.log("Replicate: ", replicate(3, 5));
// console.log("Sum Squares: ",SumSquares(l)); // 100 + 100 + 100 + 100 = 400
// console.log("Total Integers: ", seven);
// console.log("Contains: ", contains(nestedObject,'foo2'));
// console.log("Product of Array: ", productOfArray([1,2,3,10]));
// console.log("All array: ", allAreLessThanSeven);
// console.log("Sum range: ",sumRange(6));
// console.log("Factorial: ",factorial(10));
// console.log("Exponent: ",power(2,2));