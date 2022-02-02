import express from 'express';
import { registerUser } from '../controllers/userControl.js';
import { registerSchema } from '../config/validation-schema.js';
import { validateRequestSchema } from '../middleware/request-validation.js';
const router = express.Router();

// @desc Create a User
// @access Public

router.post('/', [registerSchema, validateRequestSchema], registerUser);

export default router;
