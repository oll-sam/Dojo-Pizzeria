var pizza1 = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: ["mozzarella"],
    toppings: ["pepperoni", " sausage"],
    display: function() {
console.log("Crust: " + this.crustType);
console.log("Sauce: " + this.sauceType);
console.log("Cheese: " + this.cheeses);
console.log("Toppings: " + this.toppings);
    }
}
var pizza2 = {
    crustType: "hand tossed",
    sauceType: "marinara",
    cheeses: ["mozzarella", "feta"],
    toppings: ["mushrooms", " olives", " onions"],
    display: function() {
console.log("Crust: " + this.crustType);
console.log("Sauce: " + this.sauceType);
console.log("Cheese: " + this.cheeses);
console.log("Toppings: " + this.toppings);
    }
}
var pizza3 = {
    crustType: "cheese stuffed",
    sauceType: "pesto",
    cheeses: ["mozzarella", "feta"],
    toppings: ["spinach", " sausage", " chicken"],
    display: function() {
console.log("Crust: " + this.crustType);
console.log("Sauce: " + this.sauceType);
console.log("Cheese: " + this.cheeses);
console.log("Toppings: " + this.toppings);
    }
}
var pizza4 = {
    crustType: "pan",
    sauceType: "alfredo",
    cheeses: ["mozzarella"],
    toppings: ["tomato"],
    display: function() {
console.log("Crust: " + this.crustType);
console.log("Sauce: " + this.sauceType);
console.log("Cheese: " + this.cheeses);
console.log("Toppings: " + this.toppings);
    }
}

pizza1.display();
pizza2.display();
pizza3.display();
pizza4.display();

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
