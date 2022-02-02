import express from 'express';
import { auth } from '../middleware/auth.js';
import User from '../models/userModel.js';
import { login } from '../controllers/authControl.js';

const router = express.Router();
// @route GET api/auth
// @desc Test Route
// @access Public

router.get('/', auth, async (req, res) => {
    const { id } = req.user;
    try {
        const user = await User.findById(id).select('-password');
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

//@route POST api/auth
//@desc Authentication & Get a token
//@access Public

router.post('/', login);

export default router;
