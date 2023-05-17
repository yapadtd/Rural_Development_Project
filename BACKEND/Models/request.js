const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    devisionID:{
        type: String,
        required: true
    }, 
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,  
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    division:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNo:{
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Request',postSchema);