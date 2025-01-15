// let pica = "" ; 



// function getPica () {
//     console.log("order pica");
//     setTimeout(() => {
//         pica = "picaaa"
//     } , 2000)


// }
// getPica();

// console.log(pica);

//..................................//

//Async with a callback function 

//syncronus code blocks the execution of any code that coma after it the asyncronus does not do that 
//it allow the code to excute an


function orderPica(callcabk){
    setTimeout(()=>{
        const pizza = "pizza" ;
        callcabk(pizza)
    } , 2000)
}

function pizzaReady(pizza){

    // console.log("eat" + pizza)
}

orderPica(pizzaReady) ;

// console.log("call coli ");

/*A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
It allows you to write asynchronous code in a more readable and manageable way by avoiding deeply nested callbacks, often referred to as "callback hell."*/

// async functionality with promises 
//  the promise is an objeect that is returnes to the caller of the function that tells that there is more to come.
//Promise have 3 state pending , resolve , reject 

function makerOfPromise(){

    return  new Promise( (resolve , reject) => {
        setTimeout(() => {
            resolve('Sunny')
        },200)
    })
}


const sucess = (data) => {

    console.log("the data have come succesfuly " + data)
}

const error = (data) => {

    console.log("error thttttt" + data)
}

const  getIcon = (wether) => {

    return new Promise((resolve, reject) => {

    switch(wether) {
        case 'Sunny':
            resolve("sunny icon ")
            break
        default: 
        reject("no icon avalable")
    }
})

}

//than is calld whrn the function resolves sucesfuly 
// .than can accept 2 parameters if resolve will call the first one on rejeect the second one  
//we can pass fnction and declare inside  or outside and call them 

// .finaly a method that you can call and pass a function if anythig is done all teh chained functions 
// ??we can use to remove any event listener or styf lke that 

makerOfPromise()
.then(getIcon)
.then(sucess )
.catch(error);

// example 1 


function fun1 (){



    return new Promise((resolve , reject) => {

        setTimeout(() => {

        resolve(100);

        }, 100)

    })
}

const fun2 = (nr) => {

    return new Promise((resolve , reject) => {
        if (nr % 2 == 0 ){

            resolve(`the ${nr} is even`)

        }
        else(

            resolve(`the ${nr} number is od  `)
        )

    }
);
}
fun1()
.then(fun2)
.then(sucess)
.catch(error)







