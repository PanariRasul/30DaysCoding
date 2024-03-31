const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name:{
        type:"String",
        require:true
    },

    age:{
        type:Number
    },

    work:{
        type:"String",
        enum:[chef, manager, waiter],
        require:true
    },

    mobile:{
        type:Number,
        require:true

    },

    email:{
        type:"String",
        require:true,
        unique:true
    },

    address:{
        type:"String"
    },
    
    salary:{
        type:"String",
        require:true
    }
})