const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        birthday: Date
    }
)