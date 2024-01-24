// Import necessary classes
// import { Product, TV, Shirt, Book, cart } from "./Advanced JS eComm Excercises";
const TV = require('./TV');
const Book = require('./Book');
const Shirt = require('./Shirt');
const Cart = require('./Cart');
const Product = require('./Product')

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

// 8.1 Add 3 TVs, 1 tShirt
shoppingCart.addToCart(tv1, 3);
shoppingCart.addToCart(tshirt, 1);

// 8.2 Display the initial cart total
console.log('Cart Total (Before Sorting and Discount):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 8.3 Sort the cart
shoppingCart.sortCart();

// 8.4. Display the cart total after sorting
console.log('\nCart Total (After Sorting and Before Discount):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 8.5. User then applies a discount code
try {
    shoppingCart.applyDiscountCode('MegaSale99'); // Check if discount code is entered in cart class, 15% off. 
} catch (error) {
    console.error(error.message);
}

// 8.6. Display the cart total after applying the discount
console.log('\nCart Total (After Applying Discount):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 8.7. Add books to the cart
try {
    shoppingCart.addToCart(book1, 1);
    shoppingCart.addToCart(book2, 1);
    shoppingCart.addToCart(book3, 1);
    shoppingCart.addToCart(book4, 1);
} catch (error) {
    console.error(error.message);
}

// 8.8 Display the cart total after adding books
console.log('\nCart Total (After Adding Books and Before Removing TVs):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 8.9. Remove 2 TVs from the cart
shoppingCart.removeFromCart(tv1, 2);

// 8.10. Display the cart total after removing TVs
console.log('\nCart Total (After Removing TVs and Before Sorting Again):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();

// 8.11. Sort the cart again
shoppingCart.sortCart();

// 8.12. Display the cart total after sorting again
console.log('\nCart Total (After Sorting Again):');
shoppingCart.viewCart();
shoppingCart.calculateTotal();


// Excercise 9: Fetch product data asynchronously from an external API and add the products to the cart.

// async function fetchProductData() {
//     try {
//         const response = await fetch ('https://fakestoreapi.com/products');
//         const products = await response.json();
//         return products.map(productData => {
//             return new Product (productData.title, productData.price, productData.description,);
//         })
// } catch (error) {
//     console.error('Error fetching product data:', error);
//     return []
// }
// }

// async function main() {
//     const cart = new Cart();

//     // Fetch product data asynchronously
//     const products = await fetchProductData();

//     // Add fetched products to the cart
//     products.forEach(Product => {
//         cart.addToCart(Product, 1); // Assuming quantity is 1 for each product
//     });

//     // View the cart
//     cart.viewCart();
// }

// main();


// Excercise 10: Handling Fetch errors with Promises /// Updated for Excercise 12: Final Integration with Async/Await
function fetchProductData() {
    return fetch('https://fakestoreapi.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not okay.');
        }
        return response.json(); // extract json information from response
    })
    .then(products => { // a second then is processed to process product array obtained from JSON data
        return products.map(productData => { // maps each product data to new Product instance using the class constructor. 
            return new Product(productData.title, productData.price, productData.description);
        });
    })
    .catch(error => {
        console.error('Error fetching product data:', error);
        return [];
    });
}

async function main() { 
    try {
        const cart = new Cart();

        const products = await fetchProductData();

        products.forEach(product => {
            cart.addToCart(product,1);
        });

        console.log('Cart total post fetch and product add:');
        cart.viewCart();
        cart.calculateTotal();
    } catch (error) {
        console.error('An error occured in main function.', error);
    }
}
main()

// Excercise 11: Using Async/Await for a Smooth Checkout Process

async function checkout(shoppingCart) {
    try {
        const total = await calculateTotal(shoppingCart); // calculate the total
        await applyDiscountCodes(shoppingCart); // apply discount codes
        displayCheckoutSummary(shoppingCart,total); // Summary displayed
    } catch (error) {
        console.error('An error has occured at checkout.', error) // catch error if error occurs. 
    }
}

async function applyDiscountCodes(shoppingCart) {
    await sleep (1000);
    shoppingCart.applyDiscountCode('MegaSale99'); //Check and apply discount codes in cart
}

async function calculateTotal(shoppingCart) {
    await sleep(1500); // simulating an asynchronous operation in calculating the total in the cart.
    const total = shoppingCart.calculateTotal();
    return total;
}

async function displayCheckoutSummary(shoppingCart, total) {
    console.log(`\n Checkout Summary:`);
    shoppingCart.viewCart();
    console.log(`Total Price: ${total}`);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

checkout(shoppingCart);



