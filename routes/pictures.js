const express = require('express');
const router = express.Router();
const db = require('../db/picturesQueries');

router.get('/', db.getAllPictures);
router.get('/albums/:id', db.picturesForSingleAlbum);
router.post('/', db.createPicture);
router.delete('/:id', db.deletePicture);

module.exports = router;