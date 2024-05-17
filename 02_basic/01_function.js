// function addtwono(number1, number2) {
//     let result = number1 + number2;
//     return result

//     }
//     const result = addtwono(10, 20);

//     console.log("result: ",result);

function loginUserMessage(username="anam") {

    if(!username) {
        console.log("please enter a username");
        return
    }

return `${username} just logged in`

}

console.log(loginUserMessage())