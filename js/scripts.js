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
    for (let i = 0; i < this.toppings.length; i++) {
        let topping = this.toppings[i];
        if (topping === "pepperoni") {
            toppingPrice += 2;
        } else if (topping === "canadian bacon") {
            toppingPrice += 3;
        } else if (topping === "sausage") {
            toppingPrice += 3;
        } else if (topping === "mushrooms") {
            toppingPrice += 2;
        } else if (topping === "olives") {
            toppingPrice += 2;
        } else if (topping === "onions") {
            toppingPrice += 2;
        } else if (topping === "green peppers") {
            toppingPrice += 2;
        } else if (topping === "pineapple") {
            toppingPrice += 2;
        } else if (topping === "extra cheese") {
            toppingPrice += 3;
        } else {
            toppingPrice += 0;
        };
    };
    return toppingPrice;
};

Pizza.prototype.totalPizzaPrice = function() {
    let basePrice = this.price();
    let toppingPrice = this.toppingPrice();
    let totalPizzaPrice = basePrice + toppingPrice;
    return totalPizzaPrice;
}

// let pizza = new Pizza("xlarge", ["extra cheese", "pepperoni", "sausage"]);
// console.log(pizza.totalPizzaPrice());

// UI Logic

window.addEventListener("load", function() {
    document.querySelector("#pizza-form").addEventListener("submit", function(event) {
        event.preventDefault();
    });
});