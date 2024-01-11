class Product {
    #stockCount;

    /// Excercise 4: Adding in Static Method Compare
    static compare = (a,b) => b.price - a.price;
    

    constructor(name, price, description, stockCount, identifier, title) {
        this._name = name;
        this._price = price;
        this._description = description;
        this.#stockCount = stockCount;
        this._identifier = identifier;
        this._isOnSale = false;
        this._title = title;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            throw new Error('Price cannot be negative'); // Excercise 5: Implementing for Error Handling
        }
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        if (newDescription !== '') {
            this._description = newDescription;
        } else {
            throw new Error('Please enter a valid description');
        }
    }

    get stockCount() {
        return this.#stockCount;
    }

    updateStockCount(newStockCount) {
        if (newStockCount >= 0) {
            this.#stockCount = newStockCount;
        } else {
            throw new Error ('stock count cannot be negative');
        }
    }

    get identifier() {
        return this._identifier;
    }

    // Excercise 8.5 - Handling sales. 
    get isOnSale() {
        return this.isOnSale = value;
    }

    set isOnSale(value) {
        this._isOnSale = value;
    }

    // Method to get the standard price or sale price
    getSalePrice() {
        return this._isOnSale ? this.constructor.salePrice : this._price;
    }

    // Excercise 8.6: Handling Discounts (Code in Product Class)
    applyDiscount(discountPercentage) { // Added a new applydiscount method, takes a discount percentage as an arg and adjusts the product's price accordingly.
        if (discountPercentage >= 0 && discountPercentage <= 100) { // if statement checks if discount percentage is more than and less than 0 and 100 respectively. 
            this._price = this._price * (1 - discountPercentage / 100);
        } else {
            throw new Error ('Discount amount must be between 0% and 100%') // per comment above, if not - an error is thrown.
        }
    }
}

// Example usage:
// const product1 = new Product('Laptop', 999.99, 'Powerful laptop with high-performance specifications',10, 'laptopIdentifier');
// const product2 = new Product('Smartphone', 799.99, 'Latest smartphone with advanced features',5, 'smartphoneIdentifier');
// const product3 = new Product('Monitor Screen', 249.99, 'Computer screen with curved edges',8, 'monitoridentifier');

// // Using getters
// console.log(product1.name);         // Output: Laptop
// console.log(product1.price);        // Output: 999.99
// console.log(product1.description);  // Output: Powerful laptop with high-performance specifications

// // Using setters
// try {
//     product1.name = 'Desktop';          // Set new name
//     product1.price = 1499.99;            // Set new price
//     product1.description = 'High-end desktop computer'; // Set new description
// } catch (error) {
//     console.error(error.message);
// }

// console.log(product1.name);         // Output: Desktop
// console.log(product1.price);        // Output: 1499.99
// console.log(product1.description);  // Output: High-end desktop computer

// const priceComparisonResult = Product.compare(product1, product2);
// console.log(`Price Comparison Result: ${priceComparisonResult}`);


// //Usage examples for Stock Count (Excercise 6) using getter
// console.log(product1.stockCount)

// // Using the public method to Update StockCount
// try {
//     product1.updateStockCount(20);
// } catch (error) {
//     console.error(error.message);
// }
// console.log(product1.stockCount)


//Excercise 2
class TV extends Product {
    static #salePrice = 499.99

    static get salePrice() {
        return this.#salePrice;
    }

    constructor(name, price, description, screenSize) {
        super(name, price, description);
        this.screenSize = screenSize;
    }
}

class Shirt extends Product {
    constructor(name, price, description, size) {
        super(name, price, description);
        this.size = size;
    }
}
// Create an instance of the TV class 
// const tv = new TV('Sony TV', 1299.99, 'High-resolution display with smart features', '43 Inch');

// Access properties inherited from the Product class
// console.log(tv.name);          // Output: Sony TV
// console.log(tv.price);         // Output: 1299.99  // Corrected price value
// console.log(tv.description);   // Output: High-resolution display with smart features

// // Access the TV-specific property
// console.log(tv.screenSize);    // Output: 43 Inch


// Create an instance of the Shirt class
// const shirtInstance = new Shirt('Cotton Shirt', 29.99, 'Comfortable shirt for everyday wear', 'Large');

// Access properties inherited from the Product class
// console.log(shirtInstance.name);       // Output: Cotton Shirt
// console.log(shirtInstance.price);      // Output: 29.99
// console.log(shirtInstance.description); // Output: Comfortable shirt for everyday wear

// // Access the Shirt-specific property
// console.log(shirtInstance.size);       // Output: Large



// Excercise 3: using constructor function: Note; to accomplish question 7, converted the function based approach to make Book into ES6 class. 

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


// Excercise 4: Static Methods in Class (per above)

// Excercise 5: Implementing Error Handling (per above)

// Excercise 6: Private Members

// Excercise 7: Cart Class for Managing Products

/// Objective 7.1: Create a 'cart' class to manage a collection 'product' instances.
/// Store products in an array within cart class, array methods for management
/// Each Item in collection will be an object.

class cart {
    #cartItems;
    #discountCodes; // private property added to store predefined discount codes. per constructor below: 

    constructor() {
        this.#cartItems = [];
        this.#discountCodes = [
            {code: 'MegaSale99', isApplied: false, discountPercentage: 15}, // We can add in more discount codes into the array as we wish. Each discount code will be an object with properties code (string), isApplied (boolean), and discountPercentage (number).
        ]
    }

    addToCart(product, quantity) { //Adding product type and quantity to the #cartItems array
        if (!(product instanceof Product)) { /// Excercise 8.4 Validation is being added to the cart so only product can be added. 
            throw new Error ('Only object types with "Product" can be added to the cart')
        }

        if (quantity <= 0) {
            throw new Error ("Quantity must be greater than 0")
        } const cartItem = { product, quantity };
        this.#cartItems.push(cartItem);
        console.log(`${quantity} ${product.name}(s) added to cart!`);
    }

    removeFromCart(product, quantity = -1) { // Removing a product from the cart (Optional; quantity of said item to be removed.)
        const index = this.#cartItems.findIndex(item => item.product === product); // Func looks for the index of the product in the array
        if (index !== -1) { // is the item actually in the cart
            const cartItem = this.#cartItems[index];
            
            if(cartItem.quantity <= quantity) { // If the requested quantity is greater than or equal to the quantity in the cart, remove the entire cartItem
                this.#cartItems.splice(index,1);
                console.log(`${cartItem.quantity} ${product.name}(s) remove from cart.`)
            } else {
                cartItem.quantity -= quantity; // If the requested quantity is less than the quantity in the cart, decrease the cartItem quantity
                console.log(`${quantity} ${product.name}(s) remove from cart.`)
        } 
            } else {
                console.error(`${product.name} not found in the cart.`) // If the product is not found in the cart, log an error message
            }
    }

    viewCart() {
        console.log('Items in the Cart:');
        this.#cartItems.forEach(item => {
            console.log(`${item.quantity} ${item.product.name}(s) - ${item.product.price} each`);
        });
    }
    // Excercise 7.2 Sort method added to cart
    sortCart() {
        this.#cartItems.sort((a, b) => a.product.price - b.product.price);
    }

    // Excercise 8.3 Updating quantities in the cart
    updateQuantity(productIdentifier, newQuantity) {
        const index = this.#cartItems.findIndex(item => item.product.identifier === productIdentifier); // Looks for the index of the product in the array based on productidentifier

        if (index !== -1) {
            const cartItem = this.#cartItems[index];

            if(newQuantity > 0) {
                cartItem.quantity = newQuantity; // We have accessed the array per above and are currently changing to newQuantity.
                console.log(`${cartItem.product.name}'s quantity updated to ${newQuantity} in the cart.`);
        } else {
            throw new Error ('Please update with a valid quantity greater than 0. ') // Error is thrown if 0 is attempted
        }
    } else {
        console.error(`Product with identifier ${productIdentifier} not found in the cart.`); // Error is thrown if product is not found.
    }
}

    applyDiscountCode(code) {
        const discountCode = this.#discountCodes.find(dc => dc.code === code); // this method takes in a code arg which searches for a matching discount code in #discountcode array.

        if (discountCode) {
            discountCode.isApplied = true; // if a matching code is found, then it sets the 'is applied' to true.
            console.log(`Discount code ${code} has been applied successfully!`)
        } else {
            throw new Error (`Sorry! It seems ${code} is invalid, please enter an existing valid discount code.`) // Throws error if no matching codes are found.
        }
    }

    calculateTotal() {
        let total = 0;

        this.#cartItems.forEach(item => {
            const product = item.product;

            // Check if any discount code is applied to the product
            const appliedDiscount = this.#discountCodes.find(dc => dc.isApplied);

            // Calculate the discounted price if a discount is applied
            const discountedPrice = appliedDiscount
                ? product.price * (1 - appliedDiscount.discountPercentage / 100)
                : product.price;

            total += discountedPrice * item.quantity;
        });

        console.log(`Total price after applying discounts: ${total}`);
    }
    }
// Excercise 8.7: Create a Main Program use Case
/// creating export code below for main program to use: 
// export {Product, TV, Shirt, Book, cart}

// const shoppingCart = new cart();
// shoppingCart.addToCart(product1, 2);
// shoppingCart.addToCart(product2, 1);
// shoppingCart.addToCart(product3, 5);

// // Update quantity for a specific item in the cart
// shoppingCart.updateQuantity('laptopIdentifier', 5);

// shoppingCart.viewCart();
// shoppingCart.removeFromCart(product1);
// shoppingCart.viewCart();

// tv.isOnSale = true;

// shoppingCart.sortCart();

// console.log('After sorting:');
// shoppingCart.viewCart();



