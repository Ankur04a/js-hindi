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

//rest operator
function calculateCartPrice(value1,value2,...num1){ //...used as rest operator isme kya hota hai jaise ek num1 hhai lekin agar bahut value millega toh wo ussko array mai store kr lega
    return num1;
}
console.log(calculateCartPrice(200,300,400,1000,10));//output=>400,1000,10 ? 200,300 mhi hoga q ki wo value 1 and value2 mai challa gaya hai aur hum log num1 retun kiye hai


const user={
    username:"Ankur",
    price:99
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);

//object direct bhi pass kr sakte hai
handleObject({
    username:"Guppi",
    price:56
})

//function and array

const newArray=[100,200,300,400,500]
function secondArray(getArray){
    return getArray[2];
}
console.log(secondArray(newArray))



