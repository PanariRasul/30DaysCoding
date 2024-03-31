const express = require('express')
const app = express()
const db = require("./db")

app.get('/', function (req, res) {
    res.send("Hello Iam come from back-end")
});

app.get("/rasul", function(req, res){
    res.send("Hey I Am Rasul Panari MERN Stack web developer ")
})

app.get("/education",function(req, res){
    res.send("My colification is BE in Computer Science and Engineering")
})

app.listen(3000, ()=>{
    console.log("Hey Iam Back-End side");
    console.log("Server run on port 3000");

    
});