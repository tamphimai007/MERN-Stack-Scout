const express = require('express');
const router = express.Router();

// middleware
const { authCheck, adminCheck } = require('../middleware/auth');

//controllers
const { createTraining, listTraining, listSubTypeEvent, listLevel } = require('../controllers/training')

//@route    localhost:5000/api/training
//@method   GET
//@access   Private
router.get('/training', authCheck, adminCheck, listTraining)

//@route    localhost:5000/api/training
//@method   POST
//@access   Private
router.post('/training', authCheck, adminCheck, createTraining)



//@route    localhost:5000/api/getSubTypeEvent/:id
//@method   GET
//@access   Private
router.get('/getSubTypeEvent/:id', authCheck, adminCheck, listSubTypeEvent)

//@route    localhost:5000/api/getLevel/:id
//@method   GET
//@access   Private
router.get('/getLevel/:id', authCheck, adminCheck, listLevel)




module.exports = router;