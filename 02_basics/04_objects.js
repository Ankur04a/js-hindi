// //SINGALTON OBJECTS

// //const tinderUser=new Object(); //way to declare object

// const tinderUser={}      //another way to declare object
// tinderUser.id="abc123";
// tinderUser.name="Sammy";
// tinderUser.isLoggedIn=false;

// console.log(tinderUser); 

// //object nesting

// const regularUser={
//     email:"ankurtang1111@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname:"Ankur",
//             lastname:"kumar",
//         }
//     }

// }
// console.log(regularUser.fullname.userfullname.firstname);

// //merge objects

// const obj1={1:"a" , 2:"b" }
// const obj2={3:"a" , 4:"b" } 

// //const obj3=obj1 + obj2 =>give problem aaisa hoga ki object merge hoga uska element nhi

// //best approch to merge objects
// const obj3=Object.assign({},obj1,obj2); //empty dena chahiye =>nhi denge fir bhi chalega
// console.log(obj3);

// //another way to merge and best way =>spread onjects like 

// const obj4={...obj1,...obj2};
// console.log(obj4);

// //database se jab object aata hai toh wo array of objects aata hai =>
// const user=[
//     {
//         id:"ab01",
//         email:"ak@gmail.com"
//     },
//     {
//         id:"ab01",
//         email:"ak@gmail.com"
//     },
//     {
//         id:"ab01",
//         email:"ak@gmail.com"
//     }
// ]
// console.log(user[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //IMP=>isme jo key dega uska datatype array hoga
// console.log(Object.values(tinderUser)); //value dega saare keys ke
// console.log(Object.entries(tinderUser)); //alag alag kr dega key and values ke pair ko



// //agar pata krna hai ki object mai koi property hai ki nhi toh kaise pta karenge =>
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// object => de-structure...............................................//

const course={
    courseName:"js in hindi",
    coursePrice:"999",
    courseInstructor:"Ankur"
}

console.log(course.courseName);
//par agar hmko 3 baar courseInstructor print karana hai to baar-baar likhne se aacha hai ek baar mai ho jaye
//soo iske liye ek syntax hai =>

const{courseName}=course
console.log(courseName);
//agar hum chahe toh courseName jo likh rahe hai usko bhi chota kr sakte hai
const{courseName:instructor}=course
console.log(instructor);
