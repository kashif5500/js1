const myNums=[1,2,3]

// const mytotal =myNums.reduce(function (acc,cur) {
//     console.log(acc,cur)
//     return acc+cur

// },0)


const mytotal=myNums.reduce( (acc,cur) => acc+cur,0)
console.log(mytotal);
