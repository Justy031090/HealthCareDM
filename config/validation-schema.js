import { check } from 'express-validator';

export const registerSchema = [
    check('firstName', 'You must fill all the fields').notEmpty(),
    check('lastName', 'You must fill all the fields').notEmpty(),
    check('email', 'You must provide a valid email adress').isEmail(),
    check('password', 'The password must have at least 6 characters').isLength({
        min: 6,
    }),
];
