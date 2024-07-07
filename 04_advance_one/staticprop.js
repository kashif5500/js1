class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username:${this.username}`);
    }
    static createId(){
        return`123`
    }
}

const kashif = new user ("kashif")
console.log(kashif.createId())

class Teacher extends user{
    constructor(email){
        
        this.email = email
    }
}
