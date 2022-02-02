import express from 'express';

const router = express.Router();
// @route GET api/posts
// @desc Test Route
// @access Public

router.get('/', (req, res) => {
    res.send('post route');
});
export default router;
