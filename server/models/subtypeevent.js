const mongoose = require('mongoose');

const Schema = mongoose.Schema
ObjectId = Schema.ObjectId
const subtypeEventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    idTypeEvent: {
        type: ObjectId
    }
}, { timestamps: true })

module.exports = SubtypeEvent = mongoose.model('subtypeevents', subtypeEventSchema);







