//A map is an unorderd collection of key-value pairs . Both key and value can be af any data type 
//To retrive a value you can use the corresponding key 
//Maps are itarrebles thay can be used with a for of loop

// Oblect vs Map 

// Object are in orderd whereas maps are orderd
// Keys in objects can be string or symboj type whereas in maps , they can be of any type 
// An object has a prototype and may contain a few default kes witch may collide with your pwn key if yoy're not careful
// .A map on the other side hand does not contain any key by default
// Objects are not itarable where as map are iterrable
// Apart from storig data you can store a function to an object where as maps are restricted to store 
// just storig data 

const map = new Map([['a', 1 ] , ['b', 2]])
map.set('c',3);
map.delete('c');
console.log(map.has('a'))
console.log(map.size)
// map.clear();



for (const [key,value] of map){

    console.log(key, value)
}