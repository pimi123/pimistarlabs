// charAt - findes the cheracter by index

const test = "String"

let char =  test.charAt(1)
console.log(char);

//concat(str1 , str2) combines two or more strings

let str1 = "qa ka "
let str2 ="qa ska "
let result = str1.concat("." , str2 , "!") ;

console.log(result)

//includes(substring) Checks if a string contains a specified substring.

let str = "hello world " ;
let contains = str.includes("world");
console.log(contains)

//indexOf(substring) Returns the index of the first occurrence of a specified value in a string.

let strx = "Hello, World!";
let index = strx.indexOf("World");
console.log(index); // Output: 7

// replace(searchValue, newValue) Replaces a specified value with another value in a string.
let str4 = "Hello, World!";
let newStr = str4.replace("World", "Universe");
console.log(newStr); // Output: "Hello, Universe!"


// split(separator) Splits a string into an array of substrings.

let str5 = "apple::banana,cherry . test";
let fruits = str5.split(",");
console.log(fruits); // Output: ["apple", "banana", "cherry"]

//substring(start, end)  Extracts a part of a string between two specified indexes.

let str6 = "Hello, World!";
let part = str6.substring(0, 4);
console.log(part); // Output: "World"

// toLowerCase(), toUpperCase()
// Converts a string to lowercase or uppercase.

let str7 = "Hello, World!";
let lowerStr = str7.toLowerCase();
let upperStr = str7.toUpperCase();
console.log(lowerStr); // Output: "hello, world!"
console.log(upperStr); // Output: "HELLO, WORLD!"


// trim()
// Removes whitespace from both ends of a string.

let str8 = "   Hello,   World!   ";
let trimmedStr = str8.trim();
console.log(trimmedStr); // Output: "Hello, World!"