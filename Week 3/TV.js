const Product = require('./Product');
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
module.exports = TV;