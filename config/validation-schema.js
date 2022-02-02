import { check } from 'express-validator';

export const registerSchema = [
    check('firstName', 'You must fill all the fields').notEmpty(),
    check('firstName', 'Please provide a valid name').isLength({ min: 2 }),
    check('lastName', 'You must fill all the fields').notEmpty(),
    check('lastName', 'Please provide a valid name').isLength({ min: 2 }),
    check('email', 'You must provide a valid email adress').isEmail(),
    check('password', 'The password must have at least 6 characters').isLength({
        min: 6,
    }),
];

export const profileSchema = [
    check('status', 'Status is required').notEmpty().isLength({ min: 4 }),
];
