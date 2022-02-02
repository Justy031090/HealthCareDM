import express from 'express';
import { auth } from '../middleware/auth.js';
import {
    createUpdateProfile,
    deleteProfileAndUser,
    getMyProfile,
    getProfileById,
    getProfiles,
} from '../controllers/profileControl.js';

const router = express.Router();
// @route GET api/profile/me
// @desc Get Current Users Profile
// @access Private

router.get('/me', auth, getMyProfile);

// @route POST api/profile/
// @desc Create or update user profile
// @access Private
router.post('/', auth, createUpdateProfile);

// @route GET api/profile/
// @desc Get all profiles
// @access Public
router.get('/', getProfiles);

// @route GET api/profile/user/:id
// @desc get specific profile
// @access Public

router.get('/user/:id', getProfileById);
// @route DELETE api/profile/
// @desc delete profile, user , post
// @access Private
router.delete('/', auth, deleteProfileAndUser);

export default router;
