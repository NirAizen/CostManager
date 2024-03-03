const mongoose = require('mongoose');

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