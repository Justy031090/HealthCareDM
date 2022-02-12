import Profile from '../models/profileModel.js';
import User from '../models/userModel.js';

export const getMyProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            'user',
            ['firstName', 'lastName', 'avatar']
        );
        if (!profile)
            return res.status(400).send([{ msg: 'Profile not Found' }]);
        res.send(profile);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
export const createUpdateProfile = async (req, res) => {
    const {
        company,
        status,
        linkedin,
        youtube,
        instagram,
        facebook,
        twitter,
        fieldOfStudy,
        description,
        insulinCarbRatio,
        insulinSensitivity,
        website,
        location,
        bio,
    } = req.body;
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.status = status;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;

    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;

    profileFields.education = {};
    if (fieldOfStudy) profileFields.education.fieldOfStudy = fieldOfStudy;
    if (description) profileFields.education.description = description;

    profileFields.bolusWizzard = {};
    if (insulinCarbRatio)
        profileFields.bolusWizzard.insulinCarbRatio = insulinCarbRatio;
    if (insulinSensitivity)
        profileFields.bolusWizzard.insulinSensitivity = insulinSensitivity;

    try {
        const { id } = req.user;
        let profile = await Profile.findOne({ user: id });

        //update a profile
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: id },
                { $set: profileFields },
                { new: true }
            ).populate('user', ['firstName', 'lastName', 'avatar']);
            return res.json(profile);
        }

        //create a profile
        profile = new Profile(profileFields);
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).send([{ msg: 'Server Error' }]);
    }
};
export const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', [
            'firstName',
            'lastName',
            'avatar',
        ]);
        res.send(profiles);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
export const getProfileById = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await Profile.findOne({ user: id }).populate('user', [
            'firstName',
            'lastName',
            'avatar',
        ]);
        if (!profile)
            return res.status(400).send([{ msg: 'Profile Not Found' }]);
        res.send(profile);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).send([{ msg: 'Profile not Found' }]);
        }
        res.status(500).send('Server Error');
    }
};
export const deleteProfileAndUser = async (req, res) => {
    try {
        const profile = await Profile.findOneAndRemove({ user: req.user.id });
        const user = await User.findOneAndRemove({ _id: req.user.id });
        if (!profile && !user)
            return res.status(404).send([{ msg: 'User Not Found' }]);
        res.send([{ msg: 'Succesfully Deleted' }]);
    } catch (error) {
        res.status(500).send([{ msg: 'Server Error' }]);
    }
};
