// Business Logic for Order()
function Order() {
    this.pizzas = [];
}

Order.prototype.addPizza = function (pizza) {
    this.pizzas.push(pizza);
};

Order.prototype.getTotalPrice = function () {
    let totalOrderPrice = 0;
    for (let i = 0; i < this.pizzas.length; i++) {
        totalOrderPrice += this.pizzas[i].totalPizzaPrice();
    }
    return totalOrderPrice;
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
        if (topping === "purple pepperoni") {
            toppingPrice += 3;
        } else if (topping === "purple ham") {
            toppingPrice += 3;
        } else if (topping === "purple sausage") {
            toppingPrice += 3;
        } else if (topping === "purple mushrooms") {
            toppingPrice += 2;
        } else if (topping === "kalamata olives") {
            toppingPrice += 2;
        } else if (topping === "purple onions") {
            toppingPrice += 2;
        } else if (topping === "purple peppers") {
            toppingPrice += 2;
        } else if (topping === "purple potatoes") {
            toppingPrice += 2;
        } else if (topping === "purple cabbage") {
            toppingPrice += 2;
        } else if (topping === "purple corn") {
            toppingPrice += 2;
        } else if (topping === "purple carrot") {
            toppingPrice += 2;
        } else if (topping === "purple plum") {
            toppingPrice += 2;
        } else if (topping === "purple kale") {
            toppingPrice += 2;
        } else if (topping === "purple pineapple") {
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

// function displayOrderDetails(order) {
//     let orderOutput = document.getElementById("total-order");
//     orderOutput.innerHTML = "";

//     for (let i = 0; i < order.pizzas.length; i++) {
//         let orderItem = order.pizzas[i];
//         let orderDiv = document.createElement("div");
//         orderDiv.setAttribute("class", "order-div");

//         let OrderTitle = document.createElement("h3");
//         OrderTitle.innerHTML = "Order " + (i + 1);
//         orderDiv.append(OrderTitle);

//         let orderDetails = document.createElement("p");
//         orderDetails.innerHTML = "Size: " + orderItem.size + "<br>" + "Toppings: " + orderItem.toppings.join(" + ") + "<br>" + "Price: $" + orderItem.totalPizzaPrice();
//         orderDiv.append(orderDetails);

//         orderOutput.append(orderDiv);
//     }
//     let orderTotal = document.createElement("p");
//     orderTotal.innerHTML = "Total: $" + order.getTotalPrice();
//     orderOutput.append(orderTotal);
// };


function handleOrderFormSubmission(event) {
    event.preventDefault();

    let selectedToppings = getSelectedToppings();
    let pizza = new Pizza(document.querySelector("#size").value, selectedToppings);
    let order = new Order(pizza);
    order.addPizza(pizza);

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

    // displayOrderDetails(order);
}

function handleReceiptButtonClick(event) {
    event.preventDefault();
    document.getElementById("order").setAttribute("class", "hidden");
    document.getElementById("receipt-button").setAttribute("class", "hidden");
    document.getElementById("go-back").setAttribute("class", "hidden");
    let thankYou = document.createElement("p")
    thankYou.innerHTML = " &#x1F355; ----- Thank you for your order! ------ &#x1F355; ";
    document.getElementById("order-output").append(thankYou);
    thankYou.setAttribute("class", "thank-you rainbow-text");
}

function unhideOrderForm() {
    document.getElementById("order").removeAttribute("class");
    document.getElementById("order-output").setAttribute("class", "hidden");
    document.getElementById("receipt-button").setAttribute("class", "hidden");
    document.getElementById("go-back").setAttribute("class", "hidden");
}

// function handleAddPizzaButtonClick(event) {
//     event.preventDefault();

//     document.getElementById("order-form").reset();

//     document.getElementById("total-output").innerHTML = "";
//     document.getElementById("size-output").innerHTML = "";
//     document.getElementById("toppings-output").innerHTML = "";

//     unhideOrderForm();
// }


window.addEventListener("load", function () {
    document.querySelector("#order-form").addEventListener("submit", handleOrderFormSubmission);
    document.querySelector("#receipt-button").addEventListener("click", handleReceiptButtonClick);
    document.querySelector("#go-back").addEventListener("click", handleOrderFormSubmission);
    document.querySelector("#go-back").addEventListener("click", unhideOrderForm);
    // document.querySelector("#add-pizza-button").addEventListener("click", handleAddPizzaButtonClick);
});