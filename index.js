// function dataloade() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => userData(data))
// }

// function userData(data){
//     const ul = document.getElementById('user-list')
//     for(const user of data){
//         console.log(user.email)
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }


function dataloade(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userData(data))
}
function userData (data){
    const ul = document.getElementById('user-list')
    for(const user of data){
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }
}