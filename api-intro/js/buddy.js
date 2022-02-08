// https://randomuser.me/api/?results=5

const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => showBuddy(data));
}

const showBuddy = (data) => {
    const buddies = data.results;
    // console.log(data.results);
    const buddiesDIV = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy.email);
        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.first} ${buddy.name.last} | Email: ${buddy.email} | Gender: ${buddy.gender}
        `;
        buddiesDIV.appendChild(p);
    }
}