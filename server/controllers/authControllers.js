const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const test = (req, res) => {
    res.json({ message: 'Test is working' });
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ error: 'Password is required and should be at least 6 characters long' });
        }

        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({ error: 'Email is already taken' });
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({ name, email, password: hashedPassword });

        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'No user found with this email' });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        else{
        jwt.sign({email:user.email ,id:user._id,name:user.name},process.env.JWT,{},(err,token)=>{
            if(err)throw err;
            res.cookie('token',token).json(user);
        })
        return res.json({ message: 'Login successful', user: user });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
};
const getProfile = (req, res) => {
    const { token } = req.cookies; // Use req.cookies instead of req.cookie
    if (token) {
        jwt.verify(token, process.env.JWT, {}, (err, user) => {
            if (err) {
                console.error(err);
                return res.status(401).json({ error: 'Invalid token' });
            }
            res.json(user);
        });
    } else {
        res.json(null);
    }
};


module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};
