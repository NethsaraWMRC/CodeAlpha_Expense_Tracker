const record = require('../models/record')

exports.getRecord = async (req, res)=>{
    try{
        const getRecords = await record.find();
        res.status(201).json(getRecords)

    }catch(err){
        res.jstatus(500).json('Record fetch failed', err);
    }
}

exports.getOneRecord = async (req, res)=>{
    const { id } = req.params;

    try{
        const getRecords = await record.findById(id)
        res.status(201).json(getRecords)

    }catch(err){
        res.status(500).json('Record fetch failed', err);
    }
}