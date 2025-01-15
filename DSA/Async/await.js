

//Async await should be used together 
// exception : JS Modules 
//Chrome Dev tools 
//Async await only affect the reciver 
// you can put await to nay function that returns a promise 
// any function can be asunc 
// all async promis return a promis by default 
//Error handeling try catch 

async function displayData() {
    try {
      let data = await fetch("https://randomuser.me/api/"); 
      let res = await data.json(); 
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  }
  
  displayData();


  document.addEventListener('keyup', function(event) {
    console.log('Key pressed down:', event);
  });