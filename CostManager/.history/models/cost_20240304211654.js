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
        _id: false,
        versionKey: false
    }
);

costSchema.virtual('id').set(function() {
    return Math.floor(Math.random() * 1000);
});

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;