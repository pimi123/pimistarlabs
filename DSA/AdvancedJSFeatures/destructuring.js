//Destructuring is a feature in JavaScript (and some other programming languages) 
//that allows you to unpack values from arrays or properties from objects into distinct variables in a more concise and readable way.
// It simplifies the process of extracting values, especially when dealing with complex data structures.


//Swap the value of two variables 


let a = 1; 
let b = 2 ;
let c = 3;
let d = 4 ;
let e = 5 ;


[a, b , c , d, e] = [ b , a , c , e , d];

// console.log(a);

//Example 2  swap 2 element in an array 

const colors = ["red","green " , "blue","black"];

[colors[0] , colors[3]] = [colors[3],colors[0]];


// console.log(colors);

//Example 2 asigne array values to variables 
const colors1 = ["red","green ", "blue","black"];

// const [firstColor , secondColor , thirdColor] = [colors1[3] , colors1[1] , colors1[2]]; to set specific data to the variables 

// ||

const [firstColor , secondColor , thirdColor, ...extraColors] = colors1; // this sets the data based on the order 

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


// Example 4 extract values from objects 
//values extracted can even have default values 


const person1 = {

    firstName: "Ismet",
    lastName: "Peja",
    age: "20",
    job: "singer"
}

const person2 = {

    firstName: "Naim",
    lastName: "Frashri",
    age: "30",
}

const {firstName , lastName ,age, job="Unemployed" } = person2

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//Destructure in function parameters 

function diplayPerson({firstName , lastName ,age, job="Unemployed" }){


    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);

}

diplayPerson(person1);






