import User from '../models/userModel.js';
import Profile from '../models/profileModel.js';
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
            return res.status(400).send([{ msg: 'User already exists' }]);
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
            user: { id: user.id },
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            token,
        });

        const profileFields = {
            user: user._id,
            company: '',
            status: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            facebook: '',
            twitter: '',
            fieldOfStudy: '',
            description: '',
            insulinCarbRatio: '',
            insulinSensitivity: '',
            website: '',
            location: '',
            bio: '',
        };

        let profile = new Profile(profileFields);
        await profile.save();
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
