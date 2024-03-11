/*
 * Developers:
 * - First Name: Snir
 * - Last Name: Taub
 * - ID: 207332107
 * 
 * - First Name: Nir
 * - Last Name: Aizen
 * - ID: 313272537
 */

const mongoose = require('mongoose');

// Define the structure of the cost schema
const costSchema = new mongoose.Schema(
    {
        // Define the 'id' as a default generated value.
        id: {
            type: Number,
            default: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1
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

// Create a model named 'Cost' based on the costSchema
const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;