// The reduce() function in JavaScript is a powerful array method that allows
// you to accumulate values across an array, ultimately producing a single result.
//     It's often used for summing numbers, flattening arrays, grouping data, and more.

//array.reduce(callback, initialValue);


//callback: A function that executes on each element of the array, taking four arguments:
// accumulator: The accumulated result from the previous iteration. It starts with the initialValue.
// currentValue: The current element being processed.
// currentIndex (optional): The index of the current element.
// array (optional): The array reduce was called upon.
// initialValue (optional): The initial value to start the accumulation. If not provided,
// the first element of the array is used as the initial value, and the iteration starts from the second element.


const numbers = [1,2,3,4];
const sum =numbers.reduce((accumulator,currentValue) => {

    return accumulator + currentValue ;
}, 0);


// console.log(sum); // Output: 10

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]


const items = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const itemCount = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;

    console.log(acc[item]) ;
    return acc;
}, {});
console.log(itemCount); // Output: { apple: 2, banana: 3, orange: 2 }
