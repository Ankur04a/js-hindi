const score=400;
console.log(score);
//best way to describe number
const balance=new Number(100)
console.log(balance);

//change number to string
console.log(balance.toString());
console.log(typeof balance);

//now we can apply any string property
//example =>
console.log(balance.toString().length);

  //=>     //important function hai issme hum pressision ko fixed kr dete hai jisse output mai decimal ke baad ka value limited ho jaye
console.log(balance.toFixed(2));
 //another method
 const otherNumber=12.8934;
 console.log(otherNumber.toPrecision(3)); //yaha value ka dhyam rakhna parega

//to read large number but it gave output in U.S. standard
 const hundreds=10000000
 console.log(hundreds.toLocaleString());

 //show in indian standard
 console.log(hundreds.toLocaleString('en-IN'));

 //********************** Math ******************************
 //Math is a library in javascript; => 'M' in math should always be capital

 console.log(Math);
 //some example of maths
 console.log(Math.abs(-4));     //absolute value => -ve number ko +ve mai convert kr dega;

 console.log(Math.round(4.8)); //round off
 console.log(Math.ceil(4.3)); //upper value lega agar 4 se bara hai 4.1 bhi hoga toh usko 5 mai convert karega
 console.log(Math.floor(4.8)); //lower value lega
 console.log(Math.sqrt(16)); //find square root
 console.log(Math.min(4,1,9,6,2)); //find minimum value in array and maximum as well

 //most used Math prototype
 console.log(Math.random()); //vale always lie between 0-1 and every time it give unique number
 //=>
 //it is used in gaming dice game and any thing else
console.log((Math.random()*10)+1);//to get the value in single digit
console.log(Math.floor(Math.random()*10)+1); //use math.floor to remove decimal =>it will give only single integer
//+1 issiliye kiye hai ki agar number ho 0.0002 aur agar issko 10 se multiply krte hai toh fir bhi isske startting mai 0 hi hoga issiliye +1 krdete hai =>ki result 1 ya fir usse barra aaye 0 na aaye
//trick =>
const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min);

