import mongoose from 'mongoose';

const ProfileSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        company: {
            type: String,
        },
        status: {
            type: String,
            required: true,
        },
        education: {
            school: {
                type: String,
                trim: true,
            },
            degree: {
                type: String,
                trim: true,
            },
            fieldOfStudy: {
                type: String,
                trim: true,
            },
            description: {
                type: String,
            },
        },

        social: {
            youtube: {
                type: String,
                trim: true,
            },
            twitter: {
                type: String,
                trim: true,
            },
            facebook: {
                type: String,
                trim: true,
            },
            linkedin: {
                type: String,
                trim: true,
            },
            instagram: {
                type: String,
                trim: true,
            },
        },
        bolusWizzard: {
            insulinCarbRatio: {
                type: Number,
                default: 0,
            },
            insulinSensitivity: {
                type: Number,
                default: 0,
            },
        },
        website: {
            type: String,
            trim: true,
        },
        location: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);
const Profile = mongoose.model('profile', ProfileSchema);
export default Profile;
