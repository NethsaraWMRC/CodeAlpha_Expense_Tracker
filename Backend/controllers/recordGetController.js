const record = require('../models/record')

exports.getRecord = async (req, res)=>{
    try{
        const getRecords = await record.find();
        res.json(getRecords)

    }catch(err){
        res.json('Record fetch failed', err);
    }
}

exports.getOneRecord = async (req, res)=>{
    const { id } = req.params;

    try{
        const getRecords = await record.findById(id)
        res.json(getRecords)

    }catch(err){
        res.json('Record fetch failed', err);
    }
}