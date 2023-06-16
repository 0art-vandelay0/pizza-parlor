# Pizza Parlor

#### By Casey Hill

####

## Technologies Used

- JavaScript
- CSS
- HTML

## Description

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

Describe: Pizza()

1. Test: "It will hold a pizza object with size and toppings as properties"<br>
   Code:<br>
   const pizza1 = new Pizza("small", "cheese");<br>
   Pizza(pizza1)<br>
   Expected Output:<br>
   [Pizza { size: 'small', toppings: [ 'pepperoni', 'cheese' ] }]<br>

Describe Pizza.prototype.price()

1. Test "It will return the base cost for a small size pizza."<br>
   Code:<br>
   let pizza1 = new Pizza("small", "cheese");<br>
   console.log(pizza1.price());<br>
   Expected Output:<br>
   10<br>

2. Test: "It will return base costs for a large and xlarge pizza."<br>
   Code:<br>
   let pizza1 = new Pizza("large", "pepperoni");<br>
   console.log(pizza1.price());<br>
   let pizza2 = new Pizza("xlarge", "pepperoni");<br>
   console.log(pizza2.price())<br>
   Expected Output:<br>
   20<br>
   25<br>

Describe Pizza.prototype.toppingPrice()

1. Test: "It will return cost for a topping"<br>
   Code:<br>
   let pizza = new Pizza("medium", "extra cheese");
   console.log(pizza.toppingPrice());
   Expected Output:<br>
   3<br>

2. Test: "It will return the cost of multiple chosen toppings"
   Cost:<br>
   let pizza = new Pizza("medium", ["extra cheese", "pepperoni", "sausage"]);<br>
   console.log(pizza.toppingPrice());<br>
   Expected Output:<br>
   8<br>

Describe Pizza.prototype.totalPizzaPrice()

1. Test "It will return the total price of the pizza (size + topping)"<br>
   Code:<br>
   let pizza1 = new Pizza("medium", "extra cheese");<br>
   console.log(pizza1.totalPizzaPrice());<br>
   Expected Output:<br>
   18<br>

2. Test "It will return the total price of the pizza with more than one topping (size + toppings)"<br>
   Code:<br>
   let pizza1 = new Pizza("medium", ["extra cheese", "pepperoni"]);<br>
   console.log(pizza1.totalPizzaPrice());<br>
   let pizza2 = new Pizza("medium", ["extra cheese", "pepperoni", "sausage"]);<br>
   console.log(pizza2.totalPizzaPrice());<br>
   Expected Output:<br>
   20<br>
   23<br>

## License

Please contact caseyfhill1@gmail.com with any the following:

- Found bugs :lady_beetle:
- Alterations and improvements
- General Questions
- Any contributions you would like to make! :old_key:

Copyright (c) 06/16/2023 Casey Hill
