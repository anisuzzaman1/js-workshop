function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    //console.log(post);
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        //console.log(post.body);
        const div = document.createElement('div');
        div.classList.add('post_css');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p
        `;
        postContainer.appendChild(div);
    }

}