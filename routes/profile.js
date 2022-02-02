import express from 'express';
import { auth } from '../middleware/auth.js';
import Profile from '../models/profileModel.js';
import User from '../models/userModel.js';

const router = express.Router();
// @route GET api/profile/me
// @desc Get Current Users Profile
// @access Private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            'user',
            ['name', 'avatar']
        );
        if (!profile) return res.status(400).send('Profile not Found');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// @route POST api/profile/
// @desc Create or update user profile
// @access Private
router.post('/', auth, async (req, res) => {
    ///CHECK needed
    const {
        company,
        status,
        education,
        linkedin,
        youtube,
        instagram,
        facebook,
        twitter,
        school,
        degree,
        fieldOfStudy,
        description,
    } = req.body;
    const profileFields = {};
    profileFields.user = req.user.id;

    profileFields.status = status;
    if (company) profileFields.company = company;

    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;

    profileFields.education = {};
    if (school) profileFields.education.school = school;
    if (degree) profileFields.education.degree = degree;
    if (fieldOfStudy) profileFields.education.fieldOfStudy = fieldOfStudy;
    if (description) profileFields.education.description = description;

    try {
        const { id } = req.user;
        let profile = await Profile.findOne({ user: id });

        //update a profile
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: id },
                { $set: profileFields },
                { new: true }
            );
            return res.send(profile);
        }

        //create a profile
        profile = new Profile(profileFields);

        await profile.save();
        res.status(201).send(profile);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/profile/
// @desc Get all profiles
// @access Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', [
            'firstName',
            'lastName',
            'avatar',
        ]);
        res.send(profiles);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/profile/user/:id
// @desc Get all profiles
// @access Public

router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const profile = await Profile.findOne({ user: id }).populate('user', [
            'firstName',
            'lastName',
            'avatar',
        ]);
        if (!profile) return res.status(400).send('Profile not Found');
        res.send(profile);
    } catch (error) {
        console.log(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(400).send('Profile not Found');
        }
        res.status(500).send('Server Error');
    }
});
// @route DELETE api/profile/
// @desc delete profile, user , post
// @access Private
router.delete('/', auth, async (req, res) => {
    try {
        //TODO - remove posts
        await Profile.findOneAndDelete({ user: req.user.id });
        await User.findOneAndDelete({ _id: req.user.id });
        res.send('Succesfully Deleted');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});
export default router;
