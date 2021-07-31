const mongoose = require('mongoose');

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

const eventSchema = new mongoose.Schema({
    evName: {
        type: String
    },
    evType: {
        type: ObjectId
    },
    evOrganizer: {
        type: ObjectId
    },
    evLocation: {
        type: ObjectId
    },
    evFdate: {
        type: Date
    },
    evLdate: {
        type: Date
    },
    evPrice: {
        type: Number
    },
    evLink: {
        type: String
    },
}, { timestamps: true })

module.exports = Events = mongoose.model('events', eventSchema);