const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = Users = mongoose.model('users', usersSchema);