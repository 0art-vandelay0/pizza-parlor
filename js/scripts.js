function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
};

Pizza.prototype.price = function() {
    let price = 0;
    if (this.size === "small") {
        price += 10;
    } else if (this.size === "medium") {
        price += 15;
    } else if (this.size === "large") {
        price += 20;
    } else {
        price += 25;
    };
    return price;
};

const pizza1 = new Pizza("large", "pepperoni");
console.log(pizza1.price());
const pizza2 = new Pizza("xlarge", "pepperoni");
console.log(pizza2.price())

