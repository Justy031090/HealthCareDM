import express from 'express';
import Recipe from '../models/recipeModel.js';

const router = express.Router();

// @route GET api/recipes
// @desc Get All Recipes
// @access Public

router.get('/', async (req, res) => {
    try {
        const all = await Recipe.find().select('-isSymbols');
        res.send(all);
    } catch (error) {
        res.status(500).send([{ msg: 'Server Error' }]);
    }
});

// @route GET api/recipes/:id
// @desc Get Recipe by id
// @access Public

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id).select('-isSymbols');
        res.send(recipe);
    } catch (error) {
        console.log(error);
        res.status(500).send([{ msg: 'Server Error' }]);
    }
});

export default router;
