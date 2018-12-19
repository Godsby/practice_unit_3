const {db} = require('./index.js');

const getAllPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'All pictures'
    })
  })
  .catch(err => next(err));
}

const picturesForSingleAlbum = (req, res, next) => {
  let albumId = parseInt(req.params.id);
  db.any('SELECT pictures.* FROM pictures JOIN albums ON album_id = albums.id WHERE album_id = $1', albumId)
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'All pictures for an Album'
    })
  })
  .catch(err => next(err));
}

const createPicture = (req, res, next) => {
  db.none('INSERT INTO pictures(album_id, image_name, image_link) VALUES(${album_id}, ${image_name}, ${image_link})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'New picture added'
    })
  })
  .catch(err => next(err));
}

const deletePicture = (req, res, next) => {
  let pictureId = parseInt(req.params.id);
  db.result('DELETE FROM pictures WHERE id = $1',pictureId)
  .then(result => {
    res.status(200).json({
      status: 'success',
      result: result,
      message: 'Deleted a picture'
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllPictures,
  picturesForSingleAlbum,
  createPicture,
  deletePicture
}
