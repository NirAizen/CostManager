const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id: Number,
        first_name: String,
        last_name: String,
        birthday: Date
    }
);

const user = mongoose.model('User', userSchema);

module.exports = user;