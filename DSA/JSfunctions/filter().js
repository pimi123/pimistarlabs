//filter()


// The filter method in JavaScript is a powerful function for working with arrays.
// It allows you to create a new array containing only the elements that pass a specific test defined by a provided callback function.
// This method does not modify the original array but instead returns a new array with the filtered results.

//Syntax
// array.filter(callback(element[, index[, array]])[, thisArg])

//callback: A function that is called for every element in the array. It receives the following arguments:
//
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array filter was called upon.
// thisArg (optional): Value to use as this when executing callback.

//Basic Filtering

const numbers = [5, 12, 8, 130, 44];
const filteredNumbers = numbers.filter(number => number > 10);
// console.log(filteredNumbers); // Output: [12, 130, 44]


//Filtering Objects

const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true }
];

const activeUsers = users.filter(user => user.active);
// console.log(activeUsers); // Output: [ { name: 'Alice', active: true }, { name: 'Charlie', active: true } ]


// 3. Removing Duplicate Values

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.filter((value, index, self) => {

    // console.log(self.indexOf(value), value , index)

    return self.indexOf(value) === index});
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


// 4. Filtering Based on Multiple Conditions
// You can also filter based on multiple conditions. For example,
// filtering an array of products to get those that are both in stock and priced above $20:

const products = [
    { name: 'Laptop', price: 800, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 40, inStock: true },
    { name: 'Monitor', price: 150, inStock: true }
];

const filteredProducts = products.filter(product => product.inStock && product.price > 20);
console.log(filteredProducts);
// Output: [ { name: 'Laptop', price: 800, inStock: true }, { name: 'Keyboard', price: 40, inStock: true }, { name: 'Monitor', price: 150, inStock: true } ]

// 5. Filtering with External Parameters

const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' }
];

const categoryToFilter = 'fruit';

const filteredItems = items.filter(item => item.category === categoryToFilter);
console.log(filteredItems); // Output: [ { name: 'apple', category: 'fruit' }, { name: 'banana', category: 'fruit' } ]
