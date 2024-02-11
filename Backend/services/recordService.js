const Record = require('../models/record');

exports.createRecord = ({ price, description, currency, category, date }) => {

    const newRecord = new Record({ price, description, currency, category, date });
    return newRecord;

};

exports.updateRecord = ({ price, description, currency, category, date }) => {

    return { price, description, currency, category, date };

};
