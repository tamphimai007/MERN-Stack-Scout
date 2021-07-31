const jwt = require('jsonwebtoken');
// const Users = require('../models/users');

exports.authCheck = (req, res, next) => {
    const token = req.headers['authtoken'];
    if (!token) {
        return res.status(401)
            .send('No token, authorization denied')
    }
    try {
        const decoded = jwt.verify(token, 'jwtSecret')
        req.user = decoded.user
        next();
    } catch (err) {
        res.status(401)
            .send('Token is not valid')
    }
}

exports.adminCheck = async (req, res, next) => {
    const { name } = req.user;
    const adminUser = await Users.findOne({ name }).exec();
    if (adminUser.role !== 'admin') {
        return res.status(403).send('Admin Access Denied')
    } else {
        next();
    }
}