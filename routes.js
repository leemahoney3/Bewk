'use strict';

const express   = require('express');
const router    = express.Router();

const home      = require('./controllers/home');
const about     = require('./controllers/about');
const bookmarks = require('./controllers/bookmarks');

router.get('/', home.index);

router.get('/about/', about.index);

router.get('/bookmarks/', bookmarks.index);

router.get('/bookmarks/new/', bookmarks.newFolder);
router.post('/bookmarks/new/', bookmarks.newFolderPost);

router.get('/bookmarks/delete/:folderid/', bookmarks.deleteFolder);

router.get('/bookmarks/folder/:folderid/', bookmarks.viewFolder);

router.get('/bookmarks/folder/:folderid/new/', bookmarks.newBookmark);
router.post('/bookmarks/folder/:folderid/new/', bookmarks.newBookmarkPost);

router.get('/bookmarks/folder/:folderid/delete/:bookmarkid/', bookmarks.deleteBookmark);

module.exports = router;
