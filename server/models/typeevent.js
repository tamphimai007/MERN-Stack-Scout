const mongoose = require('mongoose');

const typeEventSchema = new mongoose.Schema({
    name: {
        type: String
    }
}, { timestamps: true })

module.exports = TypeEvent = mongoose.model('typeevents', typeEventSchema);