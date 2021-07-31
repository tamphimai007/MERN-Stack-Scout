const express = require('express');
const router = express.Router();

const { createEvent,
    listEvent,
    readEvent,
    updateEvent,
    removeEvent
} = require('../controllers/event')
// middelware
const { authCheck, adminCheck } = require('../middleware/auth');


//@route    localhost:5000/api/event
//@method   POST
//@access   Private
router.post('/event', authCheck, adminCheck, createEvent)

//@route    localhost:5000/api/event
//@method   GET
//@access   Private
router.get('/event', authCheck, adminCheck, listEvent)

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/event/:id', readEvent)

//@route    localhost:5000/api/event
//@method   PUT
//@access   Public
router.put('/event/:id', updateEvent)

//@route    localhost:5000/api/event
//@method   DELETE
//@access   Public
router.delete('/event/:id', removeEvent)

module.exports = router;