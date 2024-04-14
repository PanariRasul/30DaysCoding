const express = require('express');
const router = express.Router();

//import person

const Person = require('./../models/person');

//person post method

router.post('/', async (req, res) => {

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

router.get("/", async (req, res) => {
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

router.get('/:workType', async (req, res)=>{
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({work:workType})
            console.log('Work type fetch successfull');
            res.status(200).json(response);
        } else {
            res.status(500).json({error:'Invalid work type'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal error'});
    }
});


module.exports = router;