const express = require('express');
const router = express.Router();
const {getAllAlbums, createAlbum} = require('../db/albumsQueries.js');

router.get('/', getAllAlbums);
router.post('/', createAlbum);

module.exports = router;