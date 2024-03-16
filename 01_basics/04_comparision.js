/*
console.log(2>1); //it gives output in boolean form => true;
console.log(2>=1);
console.log(2<=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
*/

//problem arrises jab hum do alag alag datatypes ko compare krte hai ex:-
console.log("2">1); //output => true because javascript string to number mai convert kr dega fir compare krta hai jo  typescript mai possible nhi hai
console.log("2"==1);

//important
//jab null ko 0 se compare krte hai
console.log(null > 0);       //output => false
console.log(null == 0);      //output => false
console.log(null >= 0);      //output => true 

//ye aaisa issliye hua ki == ye compare krta hai lekin ye <,>,>=,<= ye null ko 0 mai convert krta hai fir compare krta hai;

//===(strictly check => datatypes ko check karega)

console.log("2" == 2 );  //true aayega q ki ye string ko number mai convert krke check krega
console.log("2" === 2);  //false aayega q ki === strictly check krta hai like datatypes agar ye alag hai toh false dega string ko number mai check kr ke check nhi karega

//datatypes of null => object
//datatypes of undefined => undefined
//non primitive datatypes example => Array,Object,Function
//non-premitive datatypes ka typeof hmesa object aayega



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory 2 types ka hota hai
//1.stack(primitive datatypes)   2.heap(primitive datatypes)

//stack
let myName="ankur"
let anotherName=myName
anotherName="Kamal"
console.log(anotherName);
console.log(myName);

//heap
let userOne={
    email:"ankurtang111@gmail.com" ,
    upi:"abc@ybl"
}
let userTwo=userOne;
userTwo.email="baburao@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
