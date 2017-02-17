'use strict';

/* Home Controller */

const bookmarkModel = require('../models/bookmarks');

const home = {

  // Index page
  index(request, response) {

    console.info('Rendering Homepage');

    response.render('home', { title: '', totalBookmarks: bookmarkModel.countBookmarks() });

  }

};

module.exports = home;
