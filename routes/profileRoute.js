import express from 'express';
import { auth } from '../middleware/auth.js';
import { validateRequestSchema } from '../middleware/request-validation.js';
import { profileSchema } from '../config/validation-schema.js';
import {
    createUpdateProfile,
    deleteProfileAndUser,
    getMyProfile,
    getProfileById,
    getProfiles,
} from '../controllers/profileControl.js';

const router = express.Router();

// @desc Get Current Users Profile
// @access Private
router.get('/me', auth, getMyProfile);

// @desc Create or update user profile
// @access Private
router.post(
    '/',
    [auth, profileSchema, validateRequestSchema],
    createUpdateProfile
);

// @desc Get all profiles
// @access Public
router.get('/', getProfiles);

// @desc get specific profile
// @access Public
router.get('/user/:id', getProfileById);

// @desc delete profile & user
// @access Private
router.delete('/', auth, deleteProfileAndUser);

export default router;
