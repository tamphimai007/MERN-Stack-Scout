const mongoose = require('mongoose');

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

const trainingSchema = new mongoose.Schema({
    trNamet: {
        type: String
    },
    trNammee: {
        type: String
    },
    trMType: {
        type: String
    },
    trSType: {
        type: String
    },
    trLevel: {
        type: String
    },
    trMGroup: {
        type: String
    },
    trSGroup: {
        type: String
    },
}, { timestamps: true })

module.exports = Training = mongoose.model('trainings', trainingSchema);