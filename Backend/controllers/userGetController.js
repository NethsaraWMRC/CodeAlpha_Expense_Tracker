const user = require('../models/user')

exports.getUser = async (req, res)=>{
    try{
        const getUser = await user.find()
        res.json(getUser);
    }catch(err){
        res.json('Error fetching user', err);
    }
}

exports.getOneUser = async (req, res)=>{
    const { id } = req.params;
    try{
        const getUser = await user.findById(id);
        res.json(getUser);
    }catch(err){
        res.json('Error fetching user', err);
    }
}