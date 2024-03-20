//dates

let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString()); //imp
console.log(typeof myDate);

//let myCreateDate=new Date(2023,0,4)
//another method to declare date;
//=>
let myCreateDate=new Date(2023,0,23,5,3)

console.log(myCreateDate.toLocaleString());

//differnt format
let myModifiedDate=new Date("2023-01-14")
console.log(myModifiedDate.toLocaleString());

//imp=> to find timestamp who can do their work fast =>it is used in quizez games and for booking website who can book first by seeing their timestamp;
let myTimeStamp=Date.now() //not to use new keyword here it is used to find out the timstamp of current time
console.log(myTimeStamp);//=>give timestamp in milli second
console.log(myCreateDate.getTime());//=>myCreateDate is a object(jo date and time deta hai) toh isko timestamp pe change karenge fir compare karenge


//=>convert timestamp into second =>imp.
console.log(Math.floor(Date.now()/1000));

//other information
let newDate=new Date()
console.log(newDate.getMonth()); //used to find only month from date
//simply use getDay => to know only day as output;

//to know about month(we shoul +1 beacuse month start from 0 in javascript)
console.log(newDate.getMonth()+1);

//imp.=> to coustomize any date //in {} we use ctrl+space to know different coustomization;
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'GMT+5:30'
})

