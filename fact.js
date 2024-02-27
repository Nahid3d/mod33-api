// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


function lodeDate(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))
}      
function lodeDate2(){
    fetch('https:jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}