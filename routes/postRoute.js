import express from 'express';
import { auth } from '../middleware/auth.js';
import {
    commentOnPost,
    createPost,
    deleteComment,
    deletePostById,
    editComment,
    getPostById,
    getPosts,
    likePost,
    unlikePost,
} from '../controllers/postControl.js';

const router = express.Router();
// @desc create a post
// @access Private

router.post('/', auth, createPost);
// @desc get all posts
// @access Private

router.get('/', auth, getPosts);

// @desc get post by id
// @access Private

router.get('/:id', auth, getPostById);

// @desc delete post by id
// @access Private
router.delete('/:id', auth, deletePostById);

// @desc like a post
// @access Private
router.put('/like/:id', auth, likePost);

// @desc unlike a post
// @access Private
router.put('/unlike/:id', auth, unlikePost);

// @desc comment on post
// @access Private
router.post('/comments/:id', auth, commentOnPost);

// @desc Delete a comment
// @access Private

router.delete('/comment/:id/:comment_id', auth, deleteComment);

// @desc Edit a comment
// @access Private
router.patch('/comment/:id/:comment_id', auth, editComment);

export default router;
