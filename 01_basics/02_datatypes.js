"use strict"; //jo bhi code likhenge ussko javascript ke newer version pe compile karega

// alert(3+3) //give error kyu ki humlog issko node js mai use kr rahe hai browser mai nhi

console.log("Ankur");
console.log(3+3);
//semi colon lga bhi sakte hai aur nhi bhi but code readable hona chahiye agar ek line mai likhenge aur semicolon nhi lagayenge toh error show karega
//example
// console.log(3+3) console.log("ankur)  //ye error show karega q ki dono print statement ke bich mai semicolon nhi hai
//agar issko alag alag line main likhte toh bina semicolon ke bhi chalta ye

let name="Ankur" //string datatypes
let age=18 //number datatypes
let IsLoggedIn=false //boolean type
/*
let state; //undefined
let stateOf=null //null
*/
//number
//bigint => for large number
//string => we use in double coat("") but single also work('')
//boolean =>true/false
//null => stand alone value
//undefined => 
//symbol =>unique




// object
  

//typeof => type batyega ki wo kis type ka hai
console.log(typeof "Ankur");
console.log(typeof age);
console.log(typeof null); //output => object
console.log(typeof undefined); //output => undefined