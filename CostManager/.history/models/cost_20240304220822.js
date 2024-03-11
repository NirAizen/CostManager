const mongoose = require('mongoose');

const costSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            default: () => Math.floor(Math.random() * 1000)
        },
        user_id: String,
        year: Number,
        month: Number,
        day: Number,
        description: String,
        category: String,
        sum: Number
    }
);

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;