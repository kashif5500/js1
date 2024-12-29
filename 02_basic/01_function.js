// function addtwono(number1, number2) {
//     let result = number1 + number2;
//     return result

//     }
//     const result = addtwono(10, 20);
 
    // console.log("result: ",result);

function loginUserMessage(username="anam") {

    if(!username) {
        console.log("please enter a username");
        return
    }

return `${username} just logged in`

}

// console.log(loginUserMessage())

function calculateCartprice(val1,val2,...num1)
{
    return num1            
     }    
    //  console.log(calculateCartprice(1000,200,2300,400,5999,3000))   
    
const user={
    username:"kashif",
    prices: 50000000
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user)