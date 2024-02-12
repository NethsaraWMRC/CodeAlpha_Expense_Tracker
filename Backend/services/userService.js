const user = require('../models/user');

exports.updateUser = (userName)=>{
    const newUser = new user({
        userName: userName,
        // proPic: {
        //     data: imageBuffer,
        //     contentType: contentType
        // }
        
    })

    return newUser;
}