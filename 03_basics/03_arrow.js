const user={
    username:"Ankur",
    price:99,

    welcomMessage:function(){
        console.log(`${this.username} , welcome to website`); //"this" is used for refer current context
    }
}
user.welcomMessage();
user.username="Sam"
user.welcomMessage()

//"This" kewal object mai kaam karega function ke andar nhi soo isiiliye ye code nhi chalega
// function chai(){
//     const username="Ankur"
//     console.log(this.username);
// }
// chai()

//++++++++++ Arrow function +++++++++++++++++

//yaha pe bhi nhi chalega "this" 
const chai=()=>{
    const username="Ankur"
    console.log(this.username);
}


//examples arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,4));

//implicit function
const addTwo=(num1,num2)=>(num1+num2);
console.log(addTwo(3,4));