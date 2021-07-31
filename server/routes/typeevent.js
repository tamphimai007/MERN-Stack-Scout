const express = require('express');
const router = express.Router();

// middelware
const { authCheck, adminCheck } = require('../middleware/auth');

const {
    listTypeEvent,
    createTypeEvent,
    listSubEvent,
    createSubEvent,
    listLevel,
    createLevel,
    getSubEvent
} = require('../controllers/typeevent')

//@route    localhost:5000/api/typeevent
//@method   GET
//@access   Private
router.get('/typeevent', authCheck, adminCheck, listTypeEvent)
//@route    localhost:5000/api/typeevent
//@method   POST
//@access   Private
router.post('/typeevent', authCheck, adminCheck, createTypeEvent)


//@route    localhost:5000/api/subevent
//@method   GET
//@access   Private
router.get('/subevent', authCheck, adminCheck, listSubEvent)
//@route    localhost:5000/api/subevent
//@method   POST
//@access   Private
router.post('/subevent', authCheck, adminCheck, createSubEvent)

//@route    localhost:5000/api/getsubevent
//@method   GET
//@access   Private
router.get('/getsubevent', authCheck, adminCheck, getSubEvent)


//@route    localhost:5000/api/levelevent
//@method   GET
//@access   Private
router.get('/levelevent', authCheck, adminCheck, listLevel)
//@route    localhost:5000/api/levelevent
//@method   POST
//@access   Private
router.post('/levelevent', authCheck, adminCheck, createLevel)

module.exports = router;