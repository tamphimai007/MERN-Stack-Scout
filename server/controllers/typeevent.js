const TypeEvent = require('../models/typeevent');
const SubTypeEvent = require('../models/subtypeevent');
const LevelEvent = require('../models/levelevent');

exports.listTypeEvent = async (req, res) => {
    try {
        const typeEventList = await TypeEvent.find({}).sort({ createdAt: -1 }).exec()
        res.json(typeEventList)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.createTypeEvent = async (req, res) => {
    try {
        res.send(await new TypeEvent(req.body).save());
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.listSubEvent = async (req, res) => {
    try {
        const subevent = await TypeEvent.aggregate([
            {
                $lookup: {
                    from: 'subtypeevents',  // join กับ collection/table ไหน
                    localField: '_id', // field ของ table บนสุด
                    foreignField: 'idTypeEvent', // field ของ from
                    as: 'type' // ตั้งชื่อให้ key
                }
            },
            { $unwind: "$type" },
            {
                $lookup: {
                    from: 'levelevents',  // join กับ collection/table ไหน
                    localField: 'type._id', // field ของ table บนสุด
                    foreignField: 'idSubTypeEvent', // field ของ from
                    as: 'type.levelevents' // ตั้งชื่อให้ key
                }
            },
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    type: { $push: "$type" }
                }
            }
        ])
        res.send(subevent)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.createSubEvent = async (req, res) => {
    try {
        const subevent = await new SubTypeEvent(req.body).save();
        res.send(subevent)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.getSubEvent = async (req, res) => {
    try {
        const dataSubEvent = await SubTypeEvent.find({})
            .sort({ createdAt: -1 }).exec()
        res.send(dataSubEvent)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
}

exports.listLevel = async (req, res) => {
    try {
        console.log('listLevel')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.createLevel = async (req, res) => {
    try {
        const levelEvent = await new LevelEvent(req.body).save()
        res.send(levelEvent)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}


















//   const subevent = await SubTypeEvent.aggregate(
//     [
//         {
//             $lookup: {
//                 from: 'typeevents',   //join กับ collections ไหน
//                 localField: 'idTypeEvent', //field ที่เรียกด้านบน
//                 foreignField: '_id', //field ของ 'from'
//                 as: 'type'  // ตั้งชื่อ
//             }
//         }, { '$unwind': '$type' }
//     ]
// )
// res.send(subevent)