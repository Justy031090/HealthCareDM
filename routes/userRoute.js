import express from 'express';
import { createUser } from '../controllers/userControl.js';

const router = express.Router();

router.post('/signin', createUser);

module.exports = router;
