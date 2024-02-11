const { createRecord } = require('../services/recordService');

exports.createRecord = async (req, res) => {
    try {
        const { price, description, category, date } = req.body;
        const newRecord = createRecord({ price, description, category, date });

        await newRecord.save();

        res.status(201).json("Record added");

    } catch (err) {
        res.status(500).json('Record add failed', err);
    }
};
