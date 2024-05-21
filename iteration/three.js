// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
    
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming =["js","rb","py","java","cpp"]

// for(const key in programming)
//     {
//     console.log(key);
// }

// const coding = ["js","rb","py","java","cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// const coding = ["js","rb","py","java","cpp"]

// const values= coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
// let x=myNums.filter((num)=>{return num>5})
// console.log(x);

const newNums=[]

myNums.forEach((num)=>{
    if (num>4){
        newNums.push(num)
    }
})

console.log(newNums);