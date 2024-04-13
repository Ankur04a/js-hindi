function sayMyname(){
    console.log("A");
    console.log("n");
    console.log("k");
    console.log("u");
    console.log("r");
}
sayMyname();

// function addNumber(number1,number2){
//     console.log(number1+number2)
// }
// addNumber(2,3);
// addNumber(3,"4");  //=>output=>34
// addNumber(3,"a") //output=>3a

//javascript mai humlog function ko ek variabe mai bhi store kr sakte hai
//example=>
//const result=addNumber(2,3) //ye output nhi dega q ki function kuch return nhi kiya jabki function print kiya hai
//but agar function return karega toh output dega
function addNumber(number1,number2){
    let result=number1+number2
    return result
}
const result=addNumber(3,4);
console.log("Result :", result);

function userLoggedIn(username){
    if(username === undefined){
        console.log("enter your name");
    }
    return `${username} just logged In`;
}
//console.log(userLoggedIn("Ankur"))
console.log(userLoggedIn()) //=>output==>undefined then just logged in




