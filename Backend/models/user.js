const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    userName:{
        type:String,
        required:true,
    },
    // proPic:{
    //     data: Buffer,
    //     contentType: String
    // }
})

module.exports = mongoose.model('User', userSchema)
