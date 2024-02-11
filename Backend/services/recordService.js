const Record = require('../models/record');

exports.createRecord = ({ price, description, category, date }) => {

    const newRecord = new Record({ price, description, category, date });
    return newRecord;

};

exports.updateRecord = ({ price, description, category, date }) => {

    return { price, description, category, date };

};
