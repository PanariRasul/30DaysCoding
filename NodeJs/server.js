const express = require('express');
const app = express();
const db = require("./db");


//import person

const Person = require('./models/Person');

//import menu item

const menuItem = require('./models/menuItem');

// import body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//get method 

app.get('/', function (req, res) {
    res.send("WELLCOME TO OUR HOTEL, WE ARE HAPPY TO SERVE YOU!!")
});

//post method

app.post('/person', async (req, res) => {

    try {
        const data = req.body;

        // create new person document using mongoose
        const newPerson = new Person(data);

        /* insted of this directly pass data paramiter

            newPerson.name = data.name, 
            newPerson.age = data.age,
            newperson.work = data.work,
            newPerson.mobile = data.mobile,
            newPerson.email = data.email,
            newPerson.address = data.address,
            newPerson.salary = data.salary

        */

        //save new person into database

        const response = await newPerson.save();
        console.log("Data saves Successfully into database");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Internal Error"
        });
    }
});

//GET method to get person data

app.get("/person", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetch successfully!");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Internal Error"
        });
    }
});

//GET method for work type

app.get('/person/:workType', async (req, res)=>{
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({work:workType})
            console.log('Work type fetch successfull');
            res.status(500).json(response);
        } else {
            res.status(500).json({error:'Invalid work type'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal error'});
    }
});

//POST metod for menu item 

app.post('/menu', async (req, res) => {

    try {
        const menuData = req.body;

        // create new menu document using mongoose
        const newMenu = new menuItem(menuData);

        //save data

        const data = await newMenu.save();
        console.log("Data saves Successfully into database");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Internal Error"
        });
    }
});

//GET method for menu items

app.get('/menu', async (req, res) => {
    try {
        const data = await menuItem.find();
        console.log("Data fetch successfully!");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: 'Internal error!!'
        })
    }
});

//server listen on port 3000

app.listen(3000, () => {
    console.log("Server run on port 3000");
});