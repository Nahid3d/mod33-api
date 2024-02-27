function postContainer(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
 
function displayPost(posts){
    const newdiv = document.getElementById('post-container')
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>user ${post.userId}</h3>
         <h4>post:title ${post.title}</h4>
       <h5>post descript ${post.body}</h5>
    
        `;
        newdiv.appendChild(div);

    }
}

postContainer()