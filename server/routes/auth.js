const express = require('express');
const router = express.Router();

const { register, login, currentUser } = require('../controllers/auth');
// middelware
const { authCheck, adminCheck } = require('../middleware/auth');


//@endpoint     localhost:5000/api/register
//@method       POST
//@access       Public
router.post('/register', register);

//@endpoint     localhost:5000/api/login
//@method       POST
//@access       Public
router.post('/login', login);

//@endpoint     localhost:5000/api/current-user
//@method       POST
//@access       Public
router.post('/current-user', authCheck, currentUser);

//@endpoint     localhost:5000/api/current-admin
//@method       POST
//@access       Public
router.post('/current-admin', authCheck, adminCheck, currentUser);


module.exports = router;