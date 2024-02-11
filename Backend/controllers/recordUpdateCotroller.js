const record = require('../models/record');
const { updateRecord } = require('../services/recordService');

exports.updateRecord = async (req, res)=>{
    const { id } = req.params;
    const { price, description, category, date } = req.body;

    try {
        const updatedRecord = updateRecord({ price, description, category, date });

        await record.findByIdAndUpdate(id,updatedRecord);

        res.status(200).send({status:"record is updated"})

    } catch (err) {
        res.status(500).send({status:"error with update record", error:err.message})
    }
}