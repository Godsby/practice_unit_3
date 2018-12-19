const {db} = require('./index.js');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'All Comments'
    })
  })
  .catch(err => next(err));
}

const commentsForSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT comments.* FROM comments JOIN posts ON post_id = posts.id WHERE post_id = $1', [postId])
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'All Comments For a Single Post'
    })
  })
  .catch(err => next(err));
}

const createComment = (req, res, next) => {
  db.none('INSERT INTO comments(user_id, post_id, body) VALUES(${user_id}, ${post_id}, ${body})',req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'A Comment has been Added'
    })
  })
  .catch(err => next(err));
}

const updateComment = (req, res, next) => {
  db.none('UPDATE comments SET user_id = ${user_id}, post_id = ${post_id}, body = ${body} WHERE comments.id = ${id}', {
    user_id: req.body.user_id,
    post_id: req.body.post_id,
    body: req.body.body,
    id: parseInt(req.params.id)
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Updated a comment'
    })
  })
  .catch(err => next(err));
}

const deleteComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE id = $1', commentId)
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'Deleted a comment',
      result: result
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllComments,
  commentsForSinglePost,
  createComment,
  updateComment,
  deleteComment
}