const {db} = require('./index.js');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'ALl Posts'
    })
  })
  .catch(err => next(err));
}

const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one('SELECT * FROM posts WHERE id = $1', [postId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'One Post received'
    })
  })
  .catch(err => next(err));
}

const createPost = (req, res, next) => {
  db.none('INSERT INTO posts(user_id, body) VALUES (${user_id}, ${body})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Added A Post'
    })
  })
  .catch(err => next(err));
}

const updatePost = (req, res, next) => {
  db.none('UPDATE posts SET user_id = ${user_id}, body = ${body} WHERE id = ${id}', {
    user_id: req.body.user_id,
    body: req.body.body,
    id: parseInt(req.params.id)
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You updated A Post'
    })
  }) 
  .catch(err => next(err));
}

const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE id = $1', postId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      result: result,
      message: 'One post deleted'
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost
};