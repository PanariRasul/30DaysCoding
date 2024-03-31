const express = require('express');
const app = express();
const db = require("./db");

//import person

const Person = require("./models/person");

// import body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//get method 

app.get('/', function (req, res) {
    res.send("Hello Iam come from back-end")
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
        res.status(500).json({err:"Internal Error"});
    }

});

app.listen(3000, () => {
    console.log("Hey Iam Back-End side");
    console.log("Server run on port 3000");


});