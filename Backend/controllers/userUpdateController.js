const { updateUser } = require('../services/userService')
const user = require('../models/user')

exports.updateUser = async (req,res)=>{
    const {userName} = req.body;
    const { id } = req.params;
    
    try{
        await user.findByIdAndUpdate(id, {userName});

        res.status(201).json({ message: 'user updated successfully' });

    }catch (err) {
        res.status(500).json({ message: 'Failed to update user' });
    }
}