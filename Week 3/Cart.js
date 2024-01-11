const Product = require('./Product')
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

    module.exports = cart