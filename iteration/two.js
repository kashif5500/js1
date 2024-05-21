// const arr=[1,2,3,4,5]

// for(const num of arr){
//     // console.log(num);

// }

// const greeting = "Hello world!"
// for (const greet of greeting){
//     console.log(`Each char is ${greet}`);
// }

// *** map***

const map= new Map();
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")
map.set('US',"United States")

console.log(map)

for (const [key,value] of map){
    console.log(key,value);
}

const myObject={
    game:'NFS'
    game2:'spiderman'
}

// for (const [key,value] of Object.entries(myObject)){
//     console.log(key,value);
// }

