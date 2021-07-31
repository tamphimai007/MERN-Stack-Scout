const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    cpNamet: {
        type: String,
    },
    cpNamee: {
        type: String
    },
    cpType: {
        type: String,
    },
    cpAddress: {
        type: String,
    },
    cpAlley: {
        type: String,
    },
    cpRoad: {
        type: String
    },
    cpVillage: {
        type: String,
    },
    cpSubdist: {
        type: String,
    },
    cpDistrict: {
        type: String
    },
    cpProvince: {
        type: String,
    },
    cpPost: {
        type: String,
    },
    cpLat: {
        type: Number
    },
    cpLon: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = Camp = mongoose.model('camps', campSchema);