const Club = require('../models/club')


//@endpoint     localhost:5000/api/club
//@method       POST
//@access       Private
exports.createClub = async (req, res) => {
    try {
        res.send(await new Club(req.body).save());
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}

exports.listClub = async (req, res) => {
    try {
        res.send(await Club.find({}).sort({ createdAt: -1 }).exec());
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}



// const dataSubEvent = await SubTypeEvent.find({})
// .sort({ createdAt: -1 }).exec()
// res.send(dataSubEvent)