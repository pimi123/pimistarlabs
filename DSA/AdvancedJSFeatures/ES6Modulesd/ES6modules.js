/* ES6 Modules = An external file that contain reusable code 
that can be imported into other js files 
Write resuble code for many diffrent apps.
Can contain variabls ,classes. functons  ... and morte 
Introduces as part of ECMASCRIPT 2015 update  */ 


// import {PI , getArea } from './mathUtil.js'



// console.log(PI);


//  let area =  getArea(2);
 
 
//  console.log(area);


class Person {

     talk = () => {

        return "talking"

    }
}


const  me = new Person();
const you = new Person();

console.log(me.talk());
console.log(you.talk())