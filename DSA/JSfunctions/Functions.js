

// Function & Methods => 
// Declaration & Defination => These 2 thngs are the same thing when it comes to functions 
//Arguments & Parmeters =>
//Callback & Higher Order Function => 



    //Rest parameter  => allows the function to accept any number of arguments 
    //A function definition can only have only one rest parameter
    //and the rest parameter should be the last parameter (x , ...y) no (...x , y)

    function collectThigs(x , ...y ){

        console.log(x);
        console.log(y)

    }
    collectThigs(1,23 ,23,34,2,4,23,4,423,4,23,4,234)



    //Nested function => is the declaration of a function inside a function 
    // Function scope 

    //The variables defined inside of a function cannot be accesd utside of the function 
    // A function can acces all the variables inside the scope that is defind 
    const parentFunction =  () => {
        console.log("parent")

        const test = 1;

        const childFunction = () => {

            console.log(test)
            
        }

        childFunction()
    }

    parentFunction();


    // Closure => is a function that can have free variables together with an eniroment that can run that variable A closure is the combination of a function bundled together (enclosed) 
    // with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope.

    const outer = (x) =>{

        const inner = (y =1) => {
            console.log(x)
            return x + y;
        }

        return inner
    }

    const outerReturn =  outer(10);
    
    console.log(outerReturn());
    // console.log(outerReturn(1));



    // callback functions  when  we can pass a function as a parameter  

    function foo(bar) {

       let  res =  bar(23); //=>this particular function is called a callback function 

       console.log(res() , "this is resr ");
    }

    foo((n)=>{

        console.log("ths is a test ");
            //This is a clauser
        const calc= () =>{

            let m = 4;
            return n + m ; 

        }
        return calc;
    })

    //High order function 
    //it takes one or more functions as argument 
    //or
    //It may return a function 
    function greet(name) {
        return `Hello, ${name}!`;
      }
      
      function logMessage(messageFunction, name) {
        const message = messageFunction(name); 
        console.log(message);
      }
      
      logMessage(greet, 'Alice'); 

    // Pure Functions  =>  is a function that produces the same output for the same imput 

    function sayGreeting(name){

        return `hello ${name}`
    }

//  Immediately Invoked Function Expression  (IIFE) => Is a js function that runs as soon as it is defind

(function (){

    console.log("this is a test ");
})();

( favNumber = function (num =1){

    console.log(`this is a test  ${num}`);
})();

var a = 2
(function(){
    const a = 3;

    console.log("eewwewe" + a );
})();



