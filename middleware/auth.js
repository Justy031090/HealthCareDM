import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/userModel.js';
dotenv.config();

export const auth = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    )
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded.user;

            next();
        } catch (error) {
            if (!token) {
                return res.status(401).send('No token, please authorize !');
            }
            res.status(401).send('Token is not valid');
        }
};
