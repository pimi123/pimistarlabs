// An Object in an unorderd collection og key-values . The key must either be a  string or symbol data type where as the value can be of any data type 
// To recive a value , you can use teh corresponding key . This can be acheved usine the dot notation or brackt notation 
// An object is not iterable . You can not use it with a for of loop 

const obj = {

    name: "Pimi " ,
    age:20,
    "key-three":true,
    seyMyName: function (){
        console.log(this.name);

    }

}

obj.hobby = "football" // Is used to add a new key value // O(1)
delete obj.hobby // Is Used To delete a key value // O(1)

// Search for a value  O(n)

console.log(obj.name) //access O(1)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj) 
obj.seyMyName()
console.log(Object.keys(obj)) //O(n)
console.log(Object.values(obj))  //O(n)
console.log(Object.entries(obj)) //O(n)


// Object.keys(theObject) .values() .entries()   returns an array of all keys , values  , key-value pare