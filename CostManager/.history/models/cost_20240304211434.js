const mongoose = require('mongoose');


// not sure if the 'id' property is necessary. 
const costSchema = new mongoose.Schema(
    {
        user_id: String,
        year: Number,
        month: Number,
        day: Number,
        description: String,
        category: String,
        sum: Number
    },
    {
        _id
    }
);

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;