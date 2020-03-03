const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
});

//Get by ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.status(404).json({ message: `Post with id ${req.params.postId} does not exists!` })
    }
});

//Get by title
router.get('/name/:postTitle', async (req, res) => {
    try {
        const post = await Post.find({title: req.params.postTitle});
        res.json(post);
    } catch (err) {
        res.json({ message: `Post with title ${req.params.postTitle} does not exists!` })
    }
});

//Delete post by ID

router.delete('/:postId', async (req, res) => {
    try {
        const post = await Post.deleteOne({"_id" : req.params.postId});
        res.json(post);
    } catch (err) {
        
    }
});



router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});


module.exports = router;