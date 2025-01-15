

// An array is a  data structure that can hold a collection of values 
// Arrats can containe a mix of diffrent data type . You can store string ,booleans,number or object all in the same array 
// Array are resizeble .You dont have to declare the size of an array before creating it 
//JS arrays are zero-inexed and the insertion order is maintained 
//Arrays are iterable they can be used with a for of loop 


const arr = [1,2 ,3,4]

arr.push('qa ka qa ska')
arr.unshift('added at the begining ')
arr.pop() //remove the item from the end 
arr.shift() // remove the item form the begining

 const indexOf = arr.indexOf(4);
const Includes = arr.includes('test');


// arr.forEach( item => console.log(item))
// arr.map()


//reduce function witha arrays
const Reduce =  arr.reduce((accumulator, currentValue, currentIndex, array) => {
 // operation on accumulator and currentValue
 return accumulator + currentValue;
}, 0);

console.log(Reduce);

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = items.reduce((acc,item) => {

 console.log(acc)
 console.log(item)
 acc[item] = (acc[item] ||  0  ) +1 ;
 return acc ;
} , {})

console.log(count)


const test = {

 apple: 1

}

console.log(test.apple)
////////////

// console.log(indexOf)



// console.log(arr[4])

for(const item  of arr){

    // console.log(item);
}

// map  ,filter, refuce , concat and splice 

// Time complexity

// insert/remove from end - O(1)
// insert/remove from begining - O(n)
//access - O(n)
// Search - O(n)
// Push / pop -O(1);
// shift/ unshift/concat/slice /splice /forEach / map / filter / reduce - O(n)
