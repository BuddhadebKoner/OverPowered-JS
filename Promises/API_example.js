const url = 'https://api.github.com/users/buddhadebkoner'


// using try catch 
async function GetGitHubDetails() {
    try {
        const response = await fetch(url, { method: 'GET' })
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.log('Something Went Wrong:', error);
    }
}

GetGitHubDetails()


// using .then .catch

fetch(url, { method: 'GET' })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

