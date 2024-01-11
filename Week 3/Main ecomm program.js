// Import necessary classes
// import { Product, TV, Shirt, Book, cart } from "./Advanced JS eComm Excercises";
const TV = require('./TV');
const Book = require('./Book');
const Shirt = require('./Shirt');
const Cart = require('./Cart');

// Create instances of products
const tv1 = new TV('Samsung TV', 899.99, 'Smart TV with 4K resolution', '55 Inch');
const tv2 = new TV('Sony TV', 1099.99, 'High-resolution display with smart features', '65 Inch');
const tv3 = new TV('LG TV', 799.99, 'Ultra HD LED TV with webOS', '50 Inch');
const tshirt = new Shirt('Cotton T-Shirt', 19.99, 'Comfortable shirt for everyday wear', 'Medium');
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 9.99);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12.99);
const book3 = new Book('1984', 'George Orwell', 14.99);
const book4 = new Book('Brave New World', 'Aldous Huxley', 11.99);

// Create a cart
const shoppingCart = new Cart();

// 1. Add 3 TVs, 1 tShirt
shoppingCart.addToCart(tv1, 3);
shoppingCart.addToCart(tshirt, 1);

// 2. Display the initial cart total
console.log('Cart Total (Before Sorting and Discount):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 3. Sort the cart
shoppingCart.sortCart();

// 4. Display the cart total after sorting
console.log('\nCart Total (After Sorting and Before Discount):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 5. User then applies a discount code
try {
    shoppingCart.applyDiscountCode('MegaSale99'); // Check if discount code is entered in cart class, 15% off. 
} catch (error) {
    console.error(error.message);
}

// 6. Display the cart total after applying the discount
console.log('\nCart Total (After Applying Discount):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 7. Add books to the cart
try {
    shoppingCart.addToCart(book1, 1);
    shoppingCart.addToCart(book2, 1);
    shoppingCart.addToCart(book3, 1);
    shoppingCart.addToCart(book4, 1);
} catch (error) {
    console.error(error.message);
}

// 8. Display the cart total after adding books
console.log('\nCart Total (After Adding Books and Before Removing TVs):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 9. Remove 2 TVs from the cart
shoppingCart.removeFromCart(tv1, 2);

// 10. Display the cart total after removing TVs
console.log('\nCart Total (After Removing TVs and Before Sorting Again):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 11. Sort the cart again
shoppingCart.sortCart();

// 12. Display the cart total after sorting again
console.log('\nCart Total (After Sorting Again):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();
