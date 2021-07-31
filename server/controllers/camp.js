const Camp = require('../models/camp')


//@endpoint     localhost:5000/api/camp
//@method       POST
//@access       Private
exports.createCamp = async (req, res) => {
    try {
        res.send(await new Camp(req.body).save());
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.listCamp = async (req, res) => {
    try {
        res.send(await Camp.find({}).sort({ createdAt: -1 }).exec());
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}



// const dataSubEvent = await SubTypeEvent.find({})
// .sort({ createdAt: -1 }).exec()
// res.send(dataSubEvent)