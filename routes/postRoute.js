import express from 'express';
import { auth } from '../middleware/auth.js';
import User from '../models/userModel.js';
import Profile from '../models/profileModel.js';
import Post from '../models/postModel.js';

const router = express.Router();
// @route POST api/posts
// @desc Test Route
// @access Private

router.post('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost = new Post({
            text: req.body.text,
            firstName: user.firstName,
            lastName: user.lastName,
            avatar: user.avatar,
            user: req.user.id,
        });
        const post = await newPost.save();

        res.send(post);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});
export default router;
