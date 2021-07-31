const express = require('express');
const router = express.Router();

// middelware
const { authCheck, adminCheck } = require('../middleware/auth');

const { createCamp, listCamp } = require('../controllers/camp')
//@route    localhost:5000/api/camp
//@method   POST
//@access   Private
router.post('/camp', authCheck, adminCheck, createCamp)

//@route    localhost:5000/api/camp
//@method   GET
//@access   Public
router.get('/camp', authCheck, adminCheck, listCamp)

// //@route    localhost:5000/api/camp/:id
// //@method   GET
// //@access   Public
// router.get('/camp/:id', readEvent)

// //@route    localhost:5000/api/camp/:id
// //@method   PUT
// //@access   Public
// router.put('/camp/:id', updateEvent)

// //@route    localhost:5000/api/camp/:id
// //@method   DELETE
// //@access   Public
// router.delete('/camp/:id', removeEvent)

module.exports = router;