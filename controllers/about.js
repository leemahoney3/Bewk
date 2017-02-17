'use strict';

/* About Controller */

const about = {

  index(request, response) {

    console.info('Rendering About Page');

    response.render('about', { title: 'About' });

  }

};

module.exports = about;
