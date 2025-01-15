//SET
// * A Set is a data structure that can hold a collection 
// of values. The values however must be unique.
//* Set can contain amix of data types .
// You can store , bool ,numbers ,objects in the same set 
// *Sets are dynamicly sized .You don't have ti declere the size of a
// set before creating it 
// Set do not maintain an insertion order 
// Sets are iterable . They can be used with a for of loop

// SET VS ARRAYS 

// Arrays can contain duplicate values as sets cannot
//Innsertion order is maintaind on array but not in sets 
//Serching and deleting an element in tghe set is faster compare to an aray 



const set = new Set([1,2,3])

set.add(4) //add a value if we try to add a duplicat value the set will ignore it
console.log(set.has(4)) // checks if a value exists
set.delete(3)// it is use to delete a value
console.log(set.size) // It is used to check the size of the set 
// set.clear() // It is used to delete all teh values on the set 

for (const item of set ){

    console.log(item);
}


