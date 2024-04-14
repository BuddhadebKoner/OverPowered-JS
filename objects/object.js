
const sym = Symbol("key1");

const JsUser = {
    name : "buddhadeb",
    [sym] : "mykey",
    age : 20,
    location : "WB",
    email : "jeet@microsoft.com",
    isLoggedIn : false,
}
// console.log(JsUser[sym])
// console.log(JsUser["name"])

// JsUser.email = "bddhadeb@google.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email = "bddhadeb@gpt.com"
// console.log(JsUser)

JsUser.greattings = function(){
    return "hello user"
}

console.log(JsUser.greattings());