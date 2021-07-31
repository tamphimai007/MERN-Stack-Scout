const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    clName: {
        type: String,
    },
    clLeader: {
        type: String
    },
    clAddress: {
        type: String,
    },
    clAlley: {
        type: String,
    },
    clRoad: {
        type: String
    },
    clVillage: {
        type: String,
    },
    clSubdist: {
        type: String,
    },
    clDistrict: {
        type: String
    },
    clProvince: {
        type: String,
    },
    clPost: {
        type: String,
    },
    clLat: {
        type: Number
    },
    clLon: {
        type: Number,
    },
    clTel: {
        type: String,
    },
    clFax: {
        type: String,
    },
    clPage: {
        type: String,
    },
    clWeb: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = Club = mongoose.model('clubs', clubSchema);