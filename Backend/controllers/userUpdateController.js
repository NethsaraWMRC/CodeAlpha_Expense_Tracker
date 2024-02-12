const { updateUser } = require('../services/userService')
const user = require('../models/user')

exports.updateUser = async (req,res)=>{
    const {userName} = req.body;
    const { id } = req.params;
    
    try{
        let updateFields = { userName };

        if (req.file) {
            updateFields.proPic = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        await user.findByIdAndUpdate(id, updateFields);

        res.status(201).json({ message: 'user updated successfully' });

    }catch (err) {
        res.status(500).json({ message: 'Failed to update user' });
    }
}