const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
    price:{
        type: Number,
        required:true
    },

    description:{
        type: String,
        required:true
    },

    expensetype:{
        type: String,
        required:true
    }
})

const user = mongoose.model("users", userSchema);

module.exports = user;