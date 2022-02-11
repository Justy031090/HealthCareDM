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

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Article.findById(id);
        res.send(article);
    } catch (error) {
        console.log(error);
        res.status(500).send([{ msg: 'Server Error' }]);
    }
});

export default router;
