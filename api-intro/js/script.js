const user = { id: 1, name: "Anisuzzaman", age: 40, salary: 100_000, title: "Developer" }

const stringify = JSON.stringify(user);
// console.log(user);
//console.log(stringify);

// JSON = JAVA SCRIPT OBJECT NOTATION 

const shop = {
    name: 'Anis Store',
    address: 'Bishaw Road',
    product: ['Laptop', 'Mobile', 'PC'],
    profit: 15000,
    owner: {
        ownerName: 'Anis',
        age: 35,
        profit: 200_000
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);