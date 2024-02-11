const mongoose = require("mongoose");

const schema = mongoose.Schema;

const recordSchema = new schema({
    price:{
        type: Number,
        required:true
    },

    description:{
        type: String,
        required:true
    },

    currency:{
        type: String,
        required:true
    }, 
    
    category:{
        type: String,
        required:true
    }, 
    date:{
        type: String,
        required:true
    }
})

const record = mongoose.model("Records", recordSchema);

module.exports = record;