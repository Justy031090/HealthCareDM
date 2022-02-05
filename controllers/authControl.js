import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user)
            return res.status(400).send([{ msg: 'Invalid Credentials' }]);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).send([{ msg: 'Invalid Credentials' }]);

        const payload = {
            user: {
                id: user.id,
            },
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
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
