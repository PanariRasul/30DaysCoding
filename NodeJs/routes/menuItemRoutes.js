const express = require('express');
const router = express.Router();

//import menu item

const menuItem = require('./../models/menuItems');

//POST metod for menu item 

router.post('/', async (req, res) => {

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

router.get('/', async (req, res) => {
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

//GET method for test type 

router.get('/:tasteType',async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == "spicy" || tasteType == 'sweet' || tasteType == "sour") {
            const response = await menuItem.find({
                taste: tasteType
            });
            res.status(200).json(response);
        } else {
            res.status(200).json({
                error: 'Sorry!, This type taste note available'
            })

        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Inter Server error!'
        })
    }
})

module.exports = router;