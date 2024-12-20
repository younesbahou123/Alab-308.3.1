//Task: click button to console todo API call

const btn = document.getElementById("btn")
const ul = document.createElement('ul')
const div = document.getElementById('container')
div.appendChild(ul)

btn.addEventListener("click", getTodos)

//Task: make a fetch quest to todos

//saved url into variab;e
const url = `https://jsonplaceholder.typicode.com/todos`

//created am async function
async function getTodos(){
    //made a fetch request
    const response = await fetch(url)
    //convert to json data
    const todos = await response.json()
    console.log("todos", todos) 
    todos.forEach((todo)=>{
        const li = document.createElement('li')
        li.textContent = todo.title
        console.log(li)
        ul.appendChild(li)
    })
}


// getTodos() //call the function

//TASK: list out all todo titles
// function listTodoTitle() {

// }

// array1.forEach((element) => console.log(element));