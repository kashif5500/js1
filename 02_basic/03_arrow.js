// const user={
//     username:"kashif",
//     price:99999,
    
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this)
//     }


// }
// // user.welcomeMessage()
// // user.username="anam"
// // user.welcomeMessage()

// // console.log(this)

// // function chai(){
// //     console.log(this)
// // }
// // chai()

// // const chai = () => {
// //     username="kashif"
// //     console.log(this)
// // }
// // chai()

// // const addtwo = (num1,num2) => {
// //     return num1+num2
// // }

// // const addtwo = (num1,num2) => num1+num2


// const addtwo = (num1,num2) => ({username:"kashif"})
// console.log(addtwo(10,20))


//*****immediately invoked function Expression(IIFE) */

(function chai(){      //+++ nameIIFE function
    console.log("DB connected")
})();

((name)=>{
    console.log(`DB connected ${name}`)
})("kashif")

