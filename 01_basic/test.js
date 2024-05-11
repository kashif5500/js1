const accountId=12345
let accountEmail="kashif@gmail.com"
var accountPassword ="12345"
accountCity="jaipur"
/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail="mdanam@gmail.com"
accountPassword="4444"
accountCity="ghazipur"

console.log(accountId);

console.table([accountCity,accountPassword,accountEmail])

