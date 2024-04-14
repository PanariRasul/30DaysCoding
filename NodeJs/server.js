const express = require('express');
const app = express();
const db = require("./db");






// import body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//get method 

app.get('/', function (req, res) {
    res.send("WELLCOME TO OUR HOTEL, WE ARE HAPPY TO SERVE YOU!!")
});


//import  router

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use Router
app.use ('/person', personRoutes);
app.use ('/menu', menuItemRoutes);


//server listen on port 3000

app.listen(3000, () => {
    console.log("Server run on port 3000");
});