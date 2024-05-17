// // const jsuser = {
// //     name:"kashif",
// //     email:"kashif@gmail.com",
// //     password:"123",
// //     city:"jaipur"
// //     // isLoggedIn : false;
// //     // lastLoginDays :["monadys","saturday"]
// // }

// // console.log(jsuser.email);
// // console.log(jsuser["email"])

// const tinderUser={}
 
// tinderUser.id="123abc"
// tinderUser.name="kashif"
// tinderUser.isLoggedIn=false

// // console.log(tinderUser);

// const regularUser ={
//     email:"admin@gmail.com",
//     fullname:{
//         useerfulname:{
//             firstname:"admin",
//             lastname:"admin"

//         }
//     }
// }

// console.log(regularUser.fullname.useerfulname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign(obj1,obj2);
const obj3={...obj1,...obj2}
// console.log(obj3);

const course={
    coursename:"js in hindi ",
    price :"999",
    courseInstructor:"kashif"

}
const {courseInstructor}=course
console.log(courseInstructor);