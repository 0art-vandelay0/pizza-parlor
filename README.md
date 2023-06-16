# Pizza Parlor

#### By Casey Hill

#### A website that allows the user to build a pizza and checkout with the total price.

#### ...._everything is purple_

## Technologies Used

- JavaScript
- CSS
  - keyframes
- HTML
- VS Code
- git
- GitHub

## Description

Enter the size of pizza you want along with any and all toppings you want to add. Click the "Submit Order" button and your order details will appear on the screen. If you want to change your order, click "Adjust Order" or click "Checkout" to checkout with your current total and pizza of choice.

## Setup/Installation Requirements

### In VS Code

- Clone this repository to your local machine.
- Open VS Code
- Open the top level directory you just cloned
- Open index.html in your Live Server extension

### Directly in Browser

- Clone this repository to your local machine.
- Navigate to your browser
- File > Open File > Choose {folder you just cloned} > open index.html

## Known Bugs

- No known bugs :beetle:

## **Test Cases**

### Describe: Pizza()

1. **Test:** _"It will hold a pizza object with size and toppings as properties"_<br>
   **Code:**<br>
   &nbsp;&nbsp;&nbsp;const pizza1 = new Pizza("small", "cheese");<br>
   &nbsp;&nbsp;&nbsp;Pizza(pizza1)<br>
   **Expected Output:**<br>
   &nbsp;&nbsp;&nbsp;[Pizza { size: 'small', toppings: [ 'pepperoni', 'cheese' ] }]<br>

### Describe Pizza.prototype.price()

1. **Test:** _"It will return the base cost for a small size pizza."_<br>
   **Code:**<br>
   &nbsp;&nbsp;&nbsp;let pizza1 = new Pizza("small", "cheese");<br>
   &nbsp;&nbsp;&nbsp;console.log(pizza1.price());<br>
   **Expected Output:**<br>
   &nbsp;&nbsp;&nbsp;10<br>

2. **Test:** _"It will return base costs for a large and xlarge pizza."_<br>
   **Code:**<br>
   &nbsp;&nbsp;&nbsp;let pizza1 = new Pizza("large", "pepperoni");<br>
   &nbsp;&nbsp;&nbsp;console.log(pizza1.price());<br>
   &nbsp;&nbsp;&nbsp;let pizza2 = new Pizza("xlarge", "pepperoni");<br>
   &nbsp;&nbsp;&nbsp;console.log(pizza2.price())<br>
   **Expected Output:**<br>
   &nbsp;&nbsp;&nbsp;20<br>
   &nbsp;&nbsp;&nbsp;25<br>

### Describe Pizza.prototype.toppingPrice()

1. **Test:** _"It will return cost for a topping."_<br>
   **Code:**<br>
   &nbsp;&nbsp;&nbsp;let pizza = new Pizza("medium", "extra cheese");
   &nbsp;&nbsp;&nbsp;console.log(pizza.toppingPrice());
   **Expected Output:**<br>
   &nbsp;&nbsp;&nbsp;3<br>

2. **Test:** _"It will return the cost of multiple chosen toppings"_<br>
   **Cost:**<br>
   &nbsp;&nbsp;&nbsp;let pizza = new Pizza("medium", ["extra cheese", "pepperoni", "sausage"]);<br>
   &nbsp;&nbsp;&nbsp;console.log(pizza.toppingPrice());<br>
   Expected Output:<br>
   &nbsp;&nbsp;&nbsp;8<br>

### Describe Pizza.prototype.totalPizzaPrice()

1. **Test:** _"It will return the total price of the pizza (size + topping)"_<br>
   Code:<br>
   &nbsp;&nbsp;&nbsp;let pizza1 = new Pizza("medium", "extra cheese");<br>
   &nbsp;&nbsp;&nbsp;console.log(pizza1.totalPizzaPrice());<br>
   **Expected Output:**<br>
   &nbsp;&nbsp;&nbsp;18<br>

2. **Test:** _"It will return the total price of the pizza with more than one topping (size + toppings)"_<br>
   **Code:**<br>
   &nbsp;&nbsp;&nbsp;let pizza1 = new Pizza("medium", ["extra cheese", "pepperoni"]);<br>
   &nbsp;&nbsp;&nbsp;console.log(pizza1.totalPizzaPrice());<br>
   &nbsp;&nbsp;&nbsp;let pizza2 = new Pizza("medium", ["extra cheese", "pepperoni", "sausage"]);<br>
   &nbsp;&nbsp;&nbsp;console.log(pizza2.totalPizzaPrice());<br>
   Expected Output:<br>
   &nbsp;&nbsp;&nbsp;20<br>
   &nbsp;&nbsp;&nbsp;23<br>

### Describe Order.prototype.addPizza()

1. **Test** _"It will add Pizza objects to the pizza array"_<br>
   **Code:**<br>
   &nbsp;&nbsp;&nbsp;let pizza1 = new Pizza("medium", ["extra cheese", "pepperoni"]);<br>
   &nbsp;&nbsp;&nbsp;let pizza2 = new Pizza("medium", ["extra cheese", "pepperoni", "sausage"]);<br>
   &nbsp;&nbsp;&nbsp;let order1 = new Order();<br>
   &nbsp;&nbsp;&nbsp;order1.addPizza(pizza1)<br>
   &nbsp;&nbsp;&nbsp;order1.addPizza(pizza2)<br>
   &nbsp;&nbsp;&nbsp;console.log(order1);<br>
   **Expected Output:**<br>
   &nbsp;&nbsp;&nbsp;Order {pizzas: Array(2)}<br>
   &nbsp;&nbsp;&nbsp;pizzas: (2) [Pizza, Pizza]<br>
   &nbsp;&nbsp;&nbsp;[[Prototype]]: Object<br>

## License

Please contact caseyfhill1@gmail.com with any the following:

- Found bugs :lady_beetle:
- Alterations and improvements
- General Questions
- Any contributions you would like to make! :old_key:

Copyright (c) 06/16/2023 Casey Hill
