import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const auth = async (req, res, next) => {
    let header = req.headers.authorization;
    let token;
    if (!header || !header.startsWith('Bearer'))
        return res.status(401).json([{ msg: 'Not Authorized' }]);
    try {
        token = header.split(' ')[1];
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
