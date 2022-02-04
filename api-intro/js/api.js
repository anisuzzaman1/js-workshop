function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUsers(json))
}

function loadImages() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(json => displayPhoto(json))
}

function displayUsers(json) {
    //console.log(json.name);
    const ul = document.getElementById("users");
    for (const users of json) {
        //console.log(users.name);
        const li = document.createElement("li");
        li.innerText = `Name: ${users.name} | Email: ${users.email}`;
        ul.appendChild(li);
    }
}

function displayPhoto(json) {
    //photos
    const div = document.getElementById('photos');
    let cnt = 0;
    for (const photo of json) {
        cnt = cnt + 1;
        const photo_pl = document.createElement('photo_pl');
        photo_pl.innerHTML = `<img src="${photo.thumbnailUrl}">`;
        div.appendChild(photo_pl);
        if (cnt > 200) { break; }
    }

}