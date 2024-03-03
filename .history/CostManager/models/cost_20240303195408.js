const mongoose = require('mongoose');

// Check if this is  
const costSchema = new mongoose.Schema(
    {
        user_id: String,
        year: Number,
        month: Number,
        day: Number,
        id: String,
        description: String,
        category: String,
        sum: Number
    }
);

const cost = mongoose.model('Cost', costSchema);

module.exports = cost;