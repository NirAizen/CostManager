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
        sum: Number,
        id: {
            type: Number,
            default: () => Math.floor(Math.random() * 1000)
        }
    }
);

costSchema.virtual('id').set( () =>
{
    return Math.floor(Math.random() * 1000);
});

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;