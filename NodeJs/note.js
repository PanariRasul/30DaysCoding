var prompt = require('prompt-sync')();

/*var age= prompt("Enter your age :");

if (age<18) {
    console.log("You get 20% disscount in your ticket value")
} else if (18<=age && age<=64) {
    console.log("Your ticket value is 150$")
}else {
    console.log("you get 30% disscount on your ticket value")
}*/

/* Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length
and width of the rectangle and store them in variables. Calculate and display the area using
the formula: `area = length * width`. */

/*

var lenght = prompt("Enter length of Rectangle in cm :");
var height = prompt("Enter height of Rectangle in cm :");

const area = () => {
    return lenght * height;
}

var result=area(lenght, height);


console.log("Area of Rectangle is :" + result + " cm");

*/

/*

You're creating an online store. Define a JavaScript object named "product" with the following
properties:
- name (string)
- price (number)
- inStock (boolean)

*/
/*
const product_1 = {
    "name" : "Laptop",
    "price" : 85000,
    "inStock" : true
}

const product_2 = {
    "name":"iPhone 16pro",
    "price":120000,
    "inStock":false
}

const product_3 = {
    "name" : "Realme GT2",
    "price":35000,
    "inStock":true
}

const product_4= {
    "name":"i pad",
    "price":40000,
    "isStaock":true
}

console.log(product_1);
console.log(product_2);
console.log(product_3);
console.log(product_4);

*/

/*You're organizing a party and want to keep track of the guest list. Create an array called
"guestList" and add the names of at least five guests. Then, write a program that checks if a
given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
otherwise, display "Sorry, you're not on the guest list."*/

const guestList= ["rasul", "aasif", "reddy", "pruthvi","erappa","shran"];

// console.log (guestList)


/*
var name = prompt("Enter your name : ")

if (guestList.includes(name)){
    console.log ("Wellcome to Party!!")
}else {
    console.log("Sorry!! you are not in the guest list")
}
*/

/* You're working on a weather app. Create a JSON object representing the weather forecast for
a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
Display the information using console.log.
*/

const weatherForecast = {
    "date":"30/Mar/2024",
    "temperature":"36 deg C", 
    "conditions":"Sunny",
    "humidity":"Heigh"
}

console.log("Today Date :"+ weatherForecast.date);
console.log("Todays heighest temperature :"+ weatherForecast.temperature);
console.log("Todays condition is :"+weatherForecast. conditions);
console.log("Humidity level :"+weatherForecast.humidity);





