//obect literals
//declare symbol
const mySym=Symbol("key1");//use symbool in object ka traika hai ye...

const jsUser={
    name:"Amit",
    "full name":"Amit Aryan",
    age:15,
    [mySym]:"myKey1", //agar sq. bracket mai nhi ikhe toh ye symbol ki trah nhi balki string ke jaisa behave karega
    location:"Bhagwaanpur",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["friday","wednesday"]
}
//myArray=["h","i"]
//console.log(myArray[1]);

//how to use objects => tricks
console.log(jsUser.email);
console.log(jsUser["email"]);//"inverted comma mai likhna hoga"
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof mySym);

//change value
jsUser.email="abhinay@gmail.com"
//freeze function =>isko use krte hai ki koi bhi element of object ke value ko change na kar sake
//Object.freeze(jsUser)
jsUser.email="ankur@gmail.com"//ye walla change nhi hoga q ki freeze use kiye hai emaiol pe
console.log(jsUser["email"]);

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,$(this.name)`);
}
console.log(jsUser.greeting());//give output => undefined
console.log(jsUser.greetingTwo())