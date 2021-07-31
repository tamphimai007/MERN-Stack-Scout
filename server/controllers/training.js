const Training = require('../models/training')
const SubtypeEvent = require('../models/subtypeevent')
const LevelEvent = require('../models/levelevent')


exports.createTraining = async (req, res) => {
    try {
        const createTraining = await new Training(req.body).save();
        res.send(createTraining)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}
exports.listTraining = async (req, res) => {
    try {
        let dataTraining = await Training.find({}).sort({ createdAt: -1 }).exec();
        res.send(dataTraining)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}
// const dataSubEvent = await SubTypeEvent.find({})
// .sort({ createdAt: -1 }).exec()
// res.send(dataSubEvent)


exports.listSubTypeEvent = async (req, res) => {
    try {
        console.log(req.params.id)
        const listSub = await SubtypeEvent.find({ idTypeEvent: req.params.id }).exec()
        console.log(listSub)
        res.send(listSub)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.listLevel = async (req, res) => {
    try {
        console.log(req.params.id)
        const listLevel = await LevelEvent.find({ idSubTypeEvent: req.params.id }).exec()
        console.log(listLevel)
        res.send(listLevel)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}
