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
        console.log(error.message);
        res.status(500).send('Server Error');
    }
};
export const createUpdateProfile = async (req, res) => {
    ///CHECK needed
    const {
        company,
        status,
        linkedin,
        youtube,
        instagram,
        facebook,
        twitter,
        school,
        degree,
        fieldOfStudy,
        description,
        insulinCarbRatio,
        insulinSensitivity,
        website,
        location,
    } = req.body;
    const profileFields = {};
    profileFields.user = req.user.id;

    profileFields.status = status;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;

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
        console.log(error.message);
        res.status(500).send('Server Error');
    }
};
export const getProfileById = async (req, res) => {
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
};
export const deleteProfileAndUser = async (req, res) => {
    try {
        const profile = await Profile.findOneAndRemove({ user: req.user.id });
        const user = await User.findOneAndRemove({ _id: req.user.id });
        if (!profile && !user) return res.status(404).send('User Not Found');
        res.send('Succesfully Deleted');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
};
