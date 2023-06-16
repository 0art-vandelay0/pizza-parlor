// Business Logic for Order()
function Order() {
    this.pizzas = [];
}

Order.prototype.addPizza = function (pizza) {
    this.pizzas.push(pizza);
};

// Business Logic for Pizza()

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
            toppingPrice += 3;
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
            toppingPrice += 2;
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

// UI Logic

function getSelectedToppings() {
    const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
    let selectedToppings = [];

    checkboxes.forEach(function (checkbox) {
        selectedToppings.push(checkbox.value);
    });

    return selectedToppings;
}

function handleOrderFormSubmission(event) {
    event.preventDefault();

    let selectedToppings = getSelectedToppings();
    let pizza = new Pizza(document.querySelector("#size").value, selectedToppings);
    let totalPizzaPrice = pizza.totalPizzaPrice();
    let totalOutput = document.getElementById("total-output");
    let sizeOutput = document.getElementById("size-output");
    let toppingsOutput = document.getElementById("toppings-output");

    totalOutput.innerHTML = "";
    totalOutput.append("Total: $" + totalPizzaPrice);
    sizeOutput.innerHTML = "";
    sizeOutput.append("Size: " + pizza.size.toUpperCase());
    toppingsOutput.innerHTML = "";
    toppingsOutput.append("Toppings: " + pizza.toppings.join(" + "));
    document.getElementById("order-output").removeAttribute("class");
    document.getElementById("order").setAttribute("class", "hidden");
    document.getElementById("receipt-button").removeAttribute("class");
    document.getElementById("go-back").removeAttribute("class");
}

function handleReceiptButtonClick(event) {
    event.preventDefault();
    document.getElementById("order").setAttribute("class", "hidden");
    document.getElementById("receipt-button").setAttribute("class", "hidden");
    document.getElementById("go-back").setAttribute("class", "hidden");
    let thankYou = document.createElement("p")
    thankYou.innerHTML = " ----- Thank you for your order! ------";
    document.getElementById("order-output").append(thankYou);
    thankYou.setAttribute("class", "thank-you rainbow-text");
}

function unhideOrderForm() {
    document.getElementById("order").removeAttribute("class");
    document.getElementById("order-output").setAttribute("class", "hidden");
    document.getElementById("receipt-button").setAttribute("class", "hidden");
    document.getElementById("go-back").setAttribute("class", "hidden");
}


window.addEventListener("load", function () {
    document.querySelector("#order-form").addEventListener("submit", handleOrderFormSubmission);
    document.querySelector("#receipt-button").addEventListener("click", handleReceiptButtonClick);
    document.querySelector("#go-back").addEventListener("click", handleOrderFormSubmission);
    document.querySelector("#go-back").addEventListener("click", unhideOrderForm);
});