const mongoose = require('mongoose');

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

const levelEventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    idSubTypeEvent: {
        type: ObjectId
    }
}, { timestamps: true })

module.exports = LevelEvent = mongoose.model('levelevents', levelEventSchema);