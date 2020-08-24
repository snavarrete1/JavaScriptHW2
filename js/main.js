//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteParse(object){
    for(let i=0; i < Object.values(person3).length; i++){
        console.log(Object.values(person3)[i])
    }

}
console.log(favoriteParse(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


function Person(name,age){
    this.name = name;
    this.age = age;

    this.printID = () => {
        return `Hi my name is ${this.name}, and I am ${this.age} years old.`
    }

    this.addAge = () => {
        this.age++
        return 'Happy Birthday!'
    }
}

let sarah = new Person('Sarah Peters', 21);
let chris = new Person('Chris Newton', 30);

console.log(sarah.printID());
console.log(chris.printID());

console.log(sarah.addAge());
console.log(sarah.addAge());
console.log(sarah.addAge());
console.log(sarah.printID());



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const bigTen = (str) => {
    return new Promise((resolve,reject) => {
        if(str.length > 10){
            resolve(true)
        }else if(str.length < 10){
            reject(false)
        }
    })
}

bigTen('turtle').then((result) => {
    console.log('Big word')
}).catch((error) => {
    console.log('Small number')
})

/* codewars */
//1.
function getOrder(order) {
  
    let menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
    
    let finalOrder = order.split(/(burger|fries|chicken|pizza|sandwich|onionrings|milkshake|coke)/i);
    finalOrder = finalOrder.filter((element) => element !== null || element !== "");
    finalOrder = finalOrder.map((element) => element.charAt(0).toUpperCase() + element.slice(1));
    finalOrder = finalOrder.sort((a, b) => {
      if (menu.indexOf(a) > menu.indexOf(b)) {
        return 1;
      }
      else {
        return -1;
      }
    });
    return finalOrder.join(" ").trim(/\s/);
  }
  
console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));


//2.
var peopleWithAgeDrink = function(old) {

    if(old < 14){
      return ("drink toddy");
      }
      
      else if((old < 18) && (old >= 14)){
      return ("drink coke");
      }
      
      else if((old < 21) && (old >= 18)){
      return ("drink beer");
      }
      
      else if(old >= 21){
      return ("drink whisky");
      }

}
peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"

console.log(peopleWithAgeDrink(13))





//3.
function repeatStr (n, s) {
    return s.repeat(n);
  }


console.log(repeatStr(6, "I"));
console.log(repeatStr(5,"Hello"));
