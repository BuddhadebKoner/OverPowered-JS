var xhr = new XMLHttpRequest();
var url = 'https://api.github.com/users/buddhadebkoner';


xhr.open('GET', url);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState); 
    if (xhr.readyState === 4) {
        const data = this.responseText
        // console.log(data);
        // console.log(data.followers); // undefined
        // console.log(typeof data); // string

        const NewData = JSON.parse(this.responseText)
        console.log(typeof NewData, NewData); 
        console.log(`Followers : ${NewData.followers} Following : ${NewData.following}`);
    }
}

xhr.send();
