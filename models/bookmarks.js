'use strict';

/* Bookmark Model */

const Database  = require('./database');
const _         = require('lodash');

const bookmarks = {

  database: new Database('./data/database.json', { folders: [] }),
  collection: 'folders',

  // Get number of bookmarks in database
  countBookmarks() {

    const folders = this.getAllFolders();
    let count     = 0;

    for (let i = 0; i < folders.length; i++) {
      count += folders[i].bookmarks.length;
    }

    return count;

  },

  // Get all folders in database
  getAllFolders() {

    return this.database.findAll(this.collection);

  },

  // Get specific folder from database by id
  getFolder(id) {

    return this.database.findOneBy(this.collection, { id: id });

  },

  // Add a folder to the database
  addFolder(object) {

    this.database.add(this.collection, object);

  },

  // Remove a folder from the database
  removeFolder(id) {

    const folder = this.getFolder(id);
    this.database.remove(this.collection, folder);

  },

  // Add a bookmark to the database
  addBookmark(folderid, object) {

    let folder = this.getFolder(folderid);
    //console.log(object);
    folder.bookmarks.push(object);

  },

  // Remove a bookmark from the database
  removeBookmark(folderid, bookmarkid) {

    const folder = this.getFolder(folderid);
    _.remove(folder.bookmarks, { id: bookmarkid });

  }

};

module.exports = bookmarks;
