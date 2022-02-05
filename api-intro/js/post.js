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

function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Submit from Dhaka',
            body: 'Hello I am from Dhaka',
            userId: 777,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}