const {db} = require('./index.js');

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'All Likes Received'
    })
  })
  .catch(err => next(err));
}

const likesForSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT likes.* FROM likes JOIN posts ON post_id = posts.id WHERE post_id = $1', [postId])
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'All Likes for a Post.'
    })
  })
  .catch(err => next(err));
}
  
const createLike = (req, res, next) => {
  db.none('INSERT INTO likes(user_id, post_id) VALUES (${user_id}, ${post_id})',req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Add A Like'
    })
  })
  .catch(err => next(err));
}

const deleteLike = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.result('DELETE FROM likes WHERE id = $1', likeId)
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'Deleted a Like',
      result: result
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllLikes,
  likesForSinglePost,
  createLike,
  deleteLike
};