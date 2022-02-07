import express from 'express';
import { auth } from '../middleware/auth.js';
import User from '../models/userModel.js';
import Post from '../models/postModel.js';

export const createPost = async (req, res) => {
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
        res.status(500).send('Server Error');
    }
};
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.send(posts);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
export const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).send('Post not Found');
        res.send(post);
    } catch (error) {
        if (error.kind === 'ObjectId')
            return res.status(404).send('Post not Found');
        res.status(500).send('Server Error');
    }
};
export const deletePostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).send('Post not Found');
        if (post.user.toString() !== req.user.id)
            return res.status(401).send('Not Authorized');
        await post.remove();
        res.send('Post Removed');
    } catch (error) {
        if (error.kind === 'ObjectId')
            return res.status(404).send('Post not Found');
        res.status(500).send('Server Error');
    }
};
export const likePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (
            post.likes.filter((like) => like.user.toString() === req.user.id)
                .length > 0
        ) {
            return res.status(400).send('Post Already Liked');
        }
        post.likes.unshift({ user: req.user.id });
        await post.save();
        res.send(post.likes);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
export const unlikePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (
            post.likes.filter((like) => like.user.toString() === req.user.id)
                .length === 0
        ) {
            return res.status(400).send('Post has not been liked');
        }
        const removeIndex = post.likes
            .map((like) => like.user.toString())
            .indexOf(req.user.id);
        post.likes.splice(removeIndex, 1);

        await post.save();
        res.send(post.likes);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
export const commentOnPost = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id);

        const newComment = {
            text: req.body.text,
            firstName: user.firstName,
            lastName: user.lastName,
            avatar: user.avatar,
            user: req.user.id,
        };
        post.comments.unshift(newComment);

        await post.save();
        res.send(post.comments);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
export const deleteComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const comment = post.comments.find(
            (comment) => comment.id === req.params.comment_id
        );
        if (!comment) return res.status(404).send('Not Found');
        if (comment.user.toString() !== req.user.id)
            return res.status(401).send('Not Authorized');

        const removeIndex = post.comments
            .map((comment) => comment.user.toString())
            .indexOf(req.user.id);
        post.comments.splice(removeIndex, 1);

        await post.save();
        res.send(post.comments);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
export const editComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const comment = post.comments.find(
            (comment) => comment.id === req.params.comment_id
        );
        if (!comment) return res.status(404).send('Not Found');
        if (comment.user.toString() !== req.user.id)
            return res.status(401).send('Not Authorized');
        comment.text = req.body.text;

        await post.save();
        res.send(post.comments);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
