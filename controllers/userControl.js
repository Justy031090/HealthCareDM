import User from '../models/userModel.js';
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send('Email already exists');
        }
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm',
        });

        user = new User({
            firstName,
            lastName,
            email,
            avatar,
            password,
        });
        user.password = await bcrypt.hash(password, 10);
        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 }, //CHANGE THE TOKEN IN PROD
            (error, token) => {
                if (error) throw error;
                res.status(201).send(token);
            }
        );
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
};
