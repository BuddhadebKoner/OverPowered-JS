const promisesOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        task = true
        if (!task) {
            console.log('task 2 completed');
            resolve({ username: 'jeet', password: '123' }) // you can sedn data as argument
        } else {
            reject('somthing went wong')
        }
    }, 5000)
})


// async function consumePromisesFive(){  // async is not handels errors 
//     const response = await promisesOne
//     console.log(response);
// }


async function consumePromisesFive() {  // async is not handels errors 
    try {
        const response = await promisesOne
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromisesFive()