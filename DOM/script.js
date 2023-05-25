// window is a global variable which has many values in it 
// here location and href are properties of window 
//href returns current url
//hostname returns the ip address
//protocol returns the type of request.
// search loads the query parameters


// console.log(window);
// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.protocol);
// console.log(window.location.search);
// console.log(window.location.host);
//console.log(window.localStorage.setItem('username','Lalitha'));
// console.log(window.localStorage.getItem('username'));
// console.log(window.localStorage.removeItem('username')); 
// console.log(window.localStorage.setItem('isLoggedIn','true'));
// console.log(window.localStorage);

// For set timeout - it will call the func after the time which we setted.
// let sayHello=()=>{
//     console.log('after five seconds')
// };
// window.setTimeout(sayHello,5000);
//setInterval calls the func everytime according to the time we setted.
// window.setInterval(sayHello,1000);

//ClearInterval will clear the value set. we can clear the value based on the time we setted also.
// const sayHelloID=window.setInterval(sayHello,1000);
// window.clearInterval(sayHelloID);

//exercise
// 10 9 8 7 6 5 4 3 2 1 happy new year (refer notes)
// function countDownTimer(seconds){

// }
// countDownTimer(10);

//prompt, alert, confirm
// let name =prompt('your name?');
// console.log(name);

// alert('hi');

// let confirmAnswer=confirm('are you sure?');
// if(confirmAnswer){
//     //USER CLICKED OK
//     console.log('clicked ok');
// }
// else{
// //user clicked cancel
// console.log('clicked cancel');
// }
 //innerwidth and inner height are used to chcek the width and height of the browser.
// console.log(window.innerWidth,window.innerHeight);

// difference between window and Object.
// document is a property inside a window 
// console.log(window.document);
console.log(window.open('https://www.google.com','_blank'));
console.log(window);