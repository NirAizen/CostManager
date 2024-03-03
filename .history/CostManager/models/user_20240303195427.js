const mongoose = require('mongoose');

// Check if this is the expected coding style. 
const userSchema = new mongoose.Schema(
    {
        id: Number,
        first_name: String,
        last_name: String,
        birthday: Date
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;