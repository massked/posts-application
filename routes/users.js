const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err })
    }
});

//Get by ID
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.status(404).json({ message: `User with id ${req.params.userId} does not exists!` })
    }
});

//Get by username
router.get('/name/:username', async (req, res) => {
    try {
        const user = await User.find({title: req.params.username});
        res.json(user);
    } catch (err) {
        res.json({ message: `User with username ${req.params.postTitle} does not exists!` })
    }
});

//Delete user by ID

router.delete('/:userId', async (req, res) => {
    try {
        const user = await User.deleteOne({"_id" : req.params.userId});
        res.json(user);
    } catch (err) {
        
    }
});



router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        name: {
            firstName: req.body.name.firstName,
            lastName: req.body.name.lastName
        },
        posts: req.body.posts
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }

});


module.exports = router;