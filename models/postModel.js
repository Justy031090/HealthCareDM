import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        text: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        avatar: {
            type: String,
        },
        likes: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'users',
                },
            },
        ],
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'users',
                },
                text: {
                    type: String,
                    required: true,
                },
                avatar: {
                    type: String,
                },
                date: {
                    type: Date,
                    default: Date.now(),
                },
            },
        ],
    },
    { timestamps: true }
);
const Post = mongoose.model('post', postSchema);
export default Post;
