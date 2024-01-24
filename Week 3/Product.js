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
        return this._isOnSale = value;
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

module.exports = Product;