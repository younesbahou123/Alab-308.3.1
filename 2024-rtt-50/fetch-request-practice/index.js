/*make a folder called fetch-request-practices
touch index.html index.js
make an API call to to https://jsonplaceholder.typicode.com/users and console.log() the results
BONUS: list all the names in an unordered lists*/
//1 creat an asyc function
async function logJasonData(){
    //2 make a fech request
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //3 await - await convert response into json data
    const json = await response.json();
    //4 console.log the response
    console.log(json)
}
logJasonData() // call the function