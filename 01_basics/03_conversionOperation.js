let score="33abc"
//method 1 for finding type of
console.log(typeof score);
//method 2
console.log(typeof(score));

let valueInNumber =Number(score); //convert string to number =>Number ka 'N' hamesa capital hoga tabhi ye number mai convert karega
console.log(typeof valueInNumber)
console.log(valueInNumber)

//if score=null  it print to 0;
//if score=undefined  it print to NaN
//if score=true  it print to 1,0 if false
//if convert string to string it give output to NaN;


//sir ka notes=>
// "33"=>33
//"33abc" => NaN
//true => 1;false=0

let IsLoggedIn=1
let booleanIsLoggedIn=Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn)

//1 =>true; 0 => false
// ""=>false
// "Ankur" =>true

let someNumber=33
let stringNUmber=String(someNumber)
console.log(stringNUmber)
console.log(typeof stringNUmber)
