// promises is an object 

const promisesOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('task completed');
        resolve()
    },2000)
}) // new update -->

promisesOne.then(function(){
    console.log('promises consme');
}) // direct connected to resolve -->



// short hand -- >

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('task 2 completed');
        resolve({username: 'jeet',password: '123'}) // you can sedn data as argument
    },5000)
}).then((user)=>{
    console.log(user);
})


// callback hell -- >

new Promise(function(resolve, reject){
    setTimeout(function(){
        task = true
        if(!task){
            console.log('task 2 completed');
            resolve({username: 'jeet',password: '123'}) // you can sedn data as argument
        }else{
            reject('somthing went wong')
        }
    },5000)
})
.then((user)=>{
    console.log(user);
    return user.uername
})
.then((uername)=>{
    console.log(uername);
})
.catch((error) =>{
    console.log(error);
})
.finally(()=>{  // default 
    console.log('finaly romises either resolve or rejected');
})