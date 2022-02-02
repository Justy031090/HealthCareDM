import { validationResult } from 'express-validator';

export const validateRequestSchema = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors.array());
    next();
};
