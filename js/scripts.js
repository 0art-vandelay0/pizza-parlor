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

Pizza.prototype.toppingPrice = function() {
    let toppingPrice = 0;
    if (this.toppings === "pepperoni") {
        toppingPrice += 2;
    } else if (this.toppings === "canadian bacon") {
        toppingPrice += 3;
    } else if (this.toppings === "sausage") {
        toppingPrice += 3;
    } else if (this.toppings === "mushrooms") {
        toppingPrice += 2;
    } else if (this.toppings === "olives") {
        toppingPrice += 2;
    } else if (this.toppings === "onions") {
        toppingPrice += 2;
    } else if (this.toppings === "green peppers") {
        toppingPrice += 2;
    } else if (this.toppings === "pineapple") {
        toppingPrice += 2;
    } else if (this.toppings === "extra cheese") {
        toppingPrice += 3;
    } else {
        toppingPrice += 0;
    };
    return toppingPrice;    
}

Pizza.prototype.totalPizzaPrice = function() {
    let basePrice = this.price();
    let toppingPrice = this.toppingPrice();
    let totalPizzaPrice = basePrice + toppingPrice;
    return totalPizzaPrice;
}

let pizza = new Pizza("medium", "extra cheese");
console.log(pizza.toppingPrice());