import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        avatar: {
            type: String,
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
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('user', userSchema);

export default User;
