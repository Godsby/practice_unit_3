const express = require('express');
const router = express.Router();
const {getAllPosts, getSinglePost, createPost, updatePost, deletePost} = require('../db/postsQueries.js');

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;