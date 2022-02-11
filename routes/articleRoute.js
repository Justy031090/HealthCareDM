import express from 'express';
import Article from '../models/articleModel.js';

const router = express.Router();

// @route GET api/articles
// @desc Get All Articles
// @access Public

router.get('/', async (req, res) => {
    try {
        const all = await Article.find();
        res.send(all);
    } catch (error) {
        res.status(500).send([{ msg: 'Server Error' }]);
    }
});

export default router;
