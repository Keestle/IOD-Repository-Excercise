const Product = require('./Product');
class Book extends Product {

    constructor(title,author) {
        super(title);
        this.author = author;
    }
    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
    }
}
// Using Book class to create a new book

const newBook = new Book ('Moby Dick', 'Somedude')
newBook.displayInfo();

module.exports= Book