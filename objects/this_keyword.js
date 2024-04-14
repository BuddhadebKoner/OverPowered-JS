
const JsUser = {
    name : "buddhadeb",
    age : 20,
    location : "WB",
    email : "jeet@microsoft.com",
    isLoggedIn : false,
}

JsUser.greattingstwo = function(){
    return `hello user ${this.name}`
}

console.log(JsUser.greattingstwo());