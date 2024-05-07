
//  to create a custom prototype method in JavaScript ||

let anotherUsername = "iam a disco dancer       "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"buddhadeb      ".trueLength()
"cocaCOLA           ".trueLength()