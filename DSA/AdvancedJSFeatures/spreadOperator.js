// spread operator  ... allown an iterable such as an arrar or string 
// to be ecpanded nto sepeate elements (unpacks the elements )



let username = "this is a test " ; 
let letters = [...username].join("-");

console.log(letters)



let fruits = ["apple","banane ", "orange"];
let vegetables = ["carrots ","celery" , "patatos"];
let food = [...frames , ...vegetables , "bread "]

console.log(food);