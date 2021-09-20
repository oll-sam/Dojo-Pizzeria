function pizzaOven( crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1)
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2)
var pizza3 = pizzaOven("cheese stuffed", "pesto", ["mozzarella", "feta"], ["spinach", " sausage", " chicken"]);
console.log(pizza3)
var pizza4 = pizzaOven("pan", "alfredo", ["mozzarella"], ["tomato"]);
console.log(pizza4)


function pizzaOven() {
    var crust1 = Math.floor(Math.random() * crustType.length);
    var sauce1 = Math.floor(Math.random() * sauceType.length);
    var cheeses1 = Math.floor(Math.random() * cheeses.length);
    var toppings1 = Math.floor(Math.random() * toppings.length);
    console.log (crustType[crust1]);
    console.log (sauceType[sauce1]) ;
    console.log (cheeses[cheeses1]);
    console.log (toppings[toppings1]);
}
    var crustType = ["deepdish", "handtossed", "cheese-stuffed", "pan"];
    var sauceType = ["traditional", "marinara", "pesto", "alfredo"];
    var cheeses = ["mozzaralla", "feta", "feta and mozzarella"];
    var toppings = ["pepperoni", "sausage", "mushroom", "olives", "onions", "spinach", "chicken", "tomato"];
    
    pizzaOven()
