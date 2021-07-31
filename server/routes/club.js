const express = require('express');
const router = express.Router();

// middelware
const { authCheck, adminCheck } = require('../middleware/auth');

const { createClub, listClub } = require('../controllers/club')
//@route    localhost:5000/api/club
//@method   POST
//@access   Private
router.post('/club', authCheck, adminCheck, createClub)

//@route    localhost:5000/api/club
//@method   GET
//@access   Private
router.get('/club', authCheck, adminCheck, listClub)

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