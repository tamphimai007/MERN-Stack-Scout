const bcrypt = require('bcryptjs');
const Users = require('../models/users');
const jwt = require('jsonwebtoken')

//@endpoint     localhost:5000/api/register
//@method       POST
//@access       Public
exports.register = async (req, res) => {
    try {
        const { name, password } = req.body

        //check
        let user = await Users.findOne({ name });
        if (user) {
            return res.status(400)
                .send('User นี้มีแล้วในระบบ')
        }
        user = new Users({
            name,
            password
        })

        // encrypt
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save()

        console.log('register success')
        res.send('register success')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}



//@endpoint     localhost:5000/api/login
//@method       POST
//@access       Public
exports.login = async (req, res) => {
    try {
        //check users
        const { name, password } = req.body
        let user = await Users.findOneAndUpdate({ name }, { new: true });
        if (!user) {
            return res.status(400)
                .send('Username Invalid Credentials')
        }
        //check password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400)
                .send('Password not Match')
        }
        //create payload
        const payload = {
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        }
        // token 
        jwt.sign(payload, "jwtSecret",
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, payload })
            })

    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}



//@endpoint     localhost:5000/api/current-user
//@method       POST
//@access       Public
exports.currentUser = async (req, res) => {
    // console.log('currentUser', req.user)
    Users.findOne({ name: req.user.name })
        .select('-password')
        .exec((err, user) => {
            if (err) throw err;
            console.log(user)
            res.json(user)
        })
}