'use strict';

/* Bookmarks Controller */

const shortid       = require('shortid');
const bookmarkModel = require('../models/bookmarks');

const bookmarks = {

  // List folders
  index(request, response) {

    console.info('Rendering Bookmark Folders Page');

    response.render('bookmarks/index', {
      title: 'Bookmarks',
      folders: bookmarkModel.getAllFolders()
    });

  },

  // List bookmarks in folder
  viewFolder(request, response) {

    const folderid = request.params.folderid;

    const folder = bookmarkModel.getFolder(folderid);

    console.info('Rendering Folder (' + folder.title + ') Page');

    response.render('bookmarks/folder/index', { title: folder.title, folder: folder });

  },

  // New folder
  newFolder(request, response) {

    console.info('Rendering New Folder Page');

    response.render('bookmarks/new', { title: 'New Folder' });

  },

  // New folder POST
  newFolderPost(request, response) {

    const viewData = {
      title: 'New Folder',
      error: null
    };

    const data = {
      id: shortid.generate(),
      title: request.body.title,
      description: request.body.description,
      bookmarks: []
    };

    if (data.title != '' && data.description != '') {

      bookmarkModel.addFolder(data);
      response.redirect('/bookmarks/');

    } else {

      viewData.error = 'Could not add folder, please fill in all fields.';
      response.render('bookmarks/new', viewData);

    }

  },

  // Delete folder
  deleteFolder(request, response) {

    const folderid = request.params.folderid;

    bookmarkModel.removeFolder(folderid);
    response.redirect('/bookmarks/');

  },

  // New bookmark
  newBookmark(request, response) {

    console.log('Rendering New Bookmark Page');

    const folderid = request.params.folderid;

    response.render('bookmarks/folder/new', { title: 'New Bookmark', folderid: folderid });

  },

  // New bookmark POST
  newBookmarkPost(request, response) {

    const folderid = request.params.folderid;

    const viewData = {
      title: 'New Bookmark',
      folderid: folderid,
      error: null
    };

    const data = {
      id: shortid.generate(),
      title: request.body.title,
      link: request.body.link,
      summary: request.body.summary
    };

    if (!data.link.startsWith("http://")) {
      data.link = 'http://' + data.link;
    }

    if (data.title != '' && data.link != '' && data.summary != '') {

      bookmarkModel.addBookmark(folderid, data);
      response.redirect('/bookmarks/folder/' + folderid + '/');

    } else {

      viewData.error = 'Could not add bookmark, please fill in all fields.';
      response.render('bookmarks/folder/new', viewData);

    }

  },

  // Delete bookmark
  deleteBookmark(request, response) {

    const folderid    = request.params.folderid;
    const bookmarkid  = request.params.bookmarkid;

    bookmarkModel.removeBookmark(folderid, bookmarkid);

    response.redirect('/bookmarks/folder/' + folderid + '/');

  }


};

module.exports = bookmarks;
