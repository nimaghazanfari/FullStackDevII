const Product = (name, price) => {
    
    const obj = {
        name: name,
        price: price,

        getInfo: function() {
            console.log('The item:', this.name, 'consts:', this.price);
        }
    }

    return obj;
}

var apples = Product('apples', 25);
apples.getInfo();

var soda = Product('soda', 2);
soda.getInfo();