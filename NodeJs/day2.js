var prompt = require('prompt-sync')();
/*
var radius = prompt("Enter radius of circle : ");

function area () {
    return (3.142*radius*radius)
}

var result= area(radius);

console.log("Area of Circle is : " + result)
*/

var num1= prompt("Enter first Number X : ");
var num2 = prompt("Enter second Number Y : ")
var operationCallBack = prompt("Select Operartion to performa calculation: add,sub, mul, dive:  ")

const performOperation = ( num1, num2, operationCallBack ) => {
    return operationCallBack(num1, num2)
}

const add = (x, y)=> {
    return(x + y)
}

const sub = () => {
    return (x-y)
}

const mul = () => {
    return (x*y)
}

const dive = () => {
    return(x/y)
}

var result = performOperation(num1, num2, operationCallBack);

console.log("Result: " + result);