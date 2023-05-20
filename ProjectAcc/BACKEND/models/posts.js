const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    
    date:{
        type:String,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    actualMonetaryValue:{
        type:String,
        required:true
    },
    recivedMoneyAmount:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Project Accounts',postSchema);