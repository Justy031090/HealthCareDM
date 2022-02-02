import express from 'express';
import { registerUser } from '../controllers/userControl.js';

const router = express.Router();

// @route POST api/users
// @desc Create a User
// @access Public

router.post('/', registerUser);

export default router;
