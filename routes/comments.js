const express = require('express');
const router = express.Router();
const {getAllComments, commentsForSinglePost, createComment, updateComment,deleteComment} = require('../db/commentsQueries');

router.get('/', getAllComments);
router.get('/posts/:id', commentsForSinglePost);
router.post('/', createComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;