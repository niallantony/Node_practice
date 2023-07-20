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



