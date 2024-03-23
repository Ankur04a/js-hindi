//array

const myArr=[0,1,2,3,4,5];
//array is an object
//in javascript array is resizeable and can be of different datatypes 
//examples =>
//const Arr=[1,2,0,4,'hello',"Ankur"]; it is posible in JS

console.log(myArr[2]); //to access element of array at particular indexes;
 //shallow copy =>reference hoga mtlb same array mai change hoga
 //deep coppy =>opposite of shallow copy

 //2.
 const myHeros=["shaktiman","nagraj"];


 //another method to declare array 
 const myArr2=new Array(1,2,3,4)
 
 // array methods

 myArr.push(6)//to add value in array
 myArr.push(7)
 myArr.pop()//to remove element
 console.log(myArr);

 myArr.unshift(9)//add karega element aage se
 console.log(myArr);
 //myArr.shift()
 myArr.shift()//aage se remove karenge
console.log(myArr);
//give output in boolean form
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr=myArr.join() //change array to string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)


console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log("C",myArr)
console.log(myn2);
 
//slice mai elemnt print hoga lower aur upper range ke bich ka lower include hoga answer hai par upper nhi hoga but orriginal mai koi dikkat nhi hoga same to same rahega
//splice mai lower+upper dono include hoga but orriginal array se wo range delete ho jayega

