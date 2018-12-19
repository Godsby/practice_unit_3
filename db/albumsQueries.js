const {db} = require('./index.js');

const getAllAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received All Albums'
    })
  })
  .catch(err => next(err));
}

const createAlbum = (req, res, next) => {
  db.none('INSERT INTO albums (title) VALUES (${title})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Create An Album'
    })
  })
  .catch(err => next(err));
}

module.exports = {getAllAlbums, createAlbum};