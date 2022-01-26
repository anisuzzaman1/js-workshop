// Java Script Objects

var student1 = {
    id: 115,
    name: "Anisuzzaman",
    age: 40,
    marks: 81
};

var mobile = {
    color: 'Black',
    price: 19000,
    screenSize: '1000x1000',
    storage: '16GB'
};

var book = {
    title: 'Start with Y',
    author: 'Symon',
    price: 200.50,
    publisher: 'Penguie'
};

// Print Out Objects Child
console.log(book.title);

// Update Objects Child
book.title = "My New Author";

console.log(book.title);

var changeTitle = 'title'; // Change Title of Book
book[changeTitle] = 'Another Title G';
console.log(book.title);

