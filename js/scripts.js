function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
};

Pizza.prototype.price = function() {
    let price = 0;
    if (this.size === "small") {
        price += 10;
    } else {
        price += 15;
    } 
    return price;
};

const pizza1 = new Pizza("small", "cheese");
pizza1.price();

