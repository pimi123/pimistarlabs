
// The splice method in JavaScript is a powerful and versatile function used with arrays.
// It allows you to change the contents of an array by removing, replacing, or adding elements.

// Syntax
// array.splice(start, deleteCount, item1, item2, ...)


// 1.start: The index at which to start changing the array. If it's negative,
// it's treated as an offset from the end of the array.
// 2.deleteCount is omitted or greater than the number of elements left,
//     all elements from start to the end of the array are removed.
// 3.item1, item2, ...: Elements to add to the array, starting from the start index.
//     If no elements are specified, splice just removes elements.


//Removing Elements
let array = [1, 2, 3, 4, 5];
array.splice(2, 2); // Starts at index 2, removes 2 elements
// console.log(array); // Output: [1, 2, 5]


//Adding Elements
let array1 = [1, 2, 5];
array1  .splice(1, 0, 3, 4); // Starts at index 2, removes 0 elements, adds 3 and 4
// console.log(array1); // Output: [1, 2, 3, 4, 5]

// Replacing Elements
let array2 = [1, 2, 3, 6];
array2.splice(3, 2, 4, 5); // Starts at index 3, removes 2 elements, adds 4 and 5
// console.log(array2); // Output: [1, 2, 3, 4, 5]

//Negative Indexes
let array3 = [1, 2, 3, 4, 5];
array3.splice(-5, 0, 'a', 'b'); // Starts 2 elements from the end, removes 1 element, adds 'a' and 'b'
// console.log(array3); // Output: [1, 2, 3, 4, 'a', 'b']


let array4 = [1, 2, 3, 4, 5];
let newArray = array4.slice(0, 4).concat(['a', 'b'], array4.slice(4));
// console.log(newArray); // Output: [1, 2, 'a', 'b', 3, 4, 5]


//Using With Other Methods

let array5 = [1, 2, 3, 4, 5];
array5.splice(array5.indexOf(3), 1); // Remove element 3
console.log(array5); // Output: [1, 2, 4, 5]

//Conclusion
// The splice method is a versatile tool for managing arrays, offering capabilities to add,
// remove, and replace elements.
// By understanding its parameters and behavior, you can use it effectively in various scenarios.
// Remember to be mindful of its mutating nature and use it wisely based on whether you need to preserve the original array.