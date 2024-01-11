const Product = require('./Product');
class Shirt extends Product {
    constructor(name, price, description, size) {
        super(name, price, description);
        this.size = size;
    }
}

module.exports = Shirt; 