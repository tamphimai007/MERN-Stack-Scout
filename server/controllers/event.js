const Events = require('../models/event');



exports.createEvent = async (req, res) => {
    console.log()
    const eventData = await new Events(req.body).save();
    res.send(eventData)
}
exports.listEvent = async (req, res) => {
    //evType -> _id trainings
    //evOrganizer -> _id clubs
    //evLocation -> _id camps
    const dataEvent = await Events.aggregate([
        {
            $lookup: {
                from: 'trainings', //join กับอะไร
                localField: 'evType', //Field บนสุดเลย ของ Event
                foreignField: '_id', // key ของ from _id
                as: 'training' // ตั้งชื่อ
            }
        },
        { $unwind: "$training" },
        {
            $lookup: {
                from: 'clubs', //join กับอะไร
                localField: 'evOrganizer', //Field บนสุดเลย ของ Event
                foreignField: '_id', // key ของ from _id
                as: 'club' // ตั้งชื่อ
            }
        },
        { $unwind: "$club" },
        {
            $lookup: {
                from: 'camps', //join กับอะไร
                localField: 'evLocation', //Field บนสุดเลย ของ Event
                foreignField: '_id', // key ของ from _id
                as: 'camp' // ตั้งชื่อ
            }
        },
        { $unwind: "$camp" },
    ])
    res.send(dataEvent)
}
exports.readEvent = async (req, res) => {
    res.send('Hello readEvent Event')
}
exports.updateEvent = async (req, res) => {
    res.send('Hello updateEvent Event')
}
exports.removeEvent = async (req, res) => {
    res.send('Hello removeEvent Event')
}


// const createTraining = await new Training(req.body).save();
// res.send(createTraining)
