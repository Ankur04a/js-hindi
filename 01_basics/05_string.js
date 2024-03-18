const name="Ankur";
const repoCount=50

//console.log(name + repoCount + "value");  => concatinate string but old fashion now a days different method used i.e.

console.log(`my name is ${name} and my repo count is ${repoCount}`);  //=>best way;

//another way to declare strings

const gameName=new String("Ankur-sliet-hajipur")
console.log(gameName[0]);
console.log(gameName.length);
// all prototypes are the inbuilt function of the strings
console.log(gameName.toUpperCase());  //=>toUpperCase is a function

console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString=gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="       ankur.      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://ankur.com/ankur%20sliet"
console.log(url.replace('%20','-'));

console.log(gameName.split('-')); //=>chanfe array into strings