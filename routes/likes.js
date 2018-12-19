const express = require('express');
const router = express.Router();
const {getAllLikes, likesForSinglePost,createLike, deleteLike} = require('../db/likesQueries.js');

router.get('/', getAllLikes);
router.get('/posts/:id', likesForSinglePost);
router.post('/', createLike);
router.delete('/:id', deleteLike);

module.exports = router;