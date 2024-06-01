const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000) 
}).then(function(){
    console.log("async 2 revolved");
    
})

const promisesThree=new Promise(function(resolve,reject){
    setTimeout(function(){},1000)
    resolve({username:"Chai",email:"chai@example.com"})
})

promisesThree.then(function(user){
    console.log(user);

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"kashif",password:"123"});
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is resolve or reject"))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);

    }
}

consumePromiseFive()


async 
