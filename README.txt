Bewk - The super simple bookmark manager.

Web Development 2 - Assignment 1

Student Name: Lee Mahoney
Student Number: 20071535

Description:

Bewk is a smart and elegant way to store your bookmarks for easy access in the future.
You can store your bookmarks in custom groups therefore all bookmarks can be organized the way you want them to be.
You can also add as many bookmarks as you please, the possibilities are endless.

This project was built as part of the Web Development 2 module and it shows a basic understanding of JavaScript,
Storing Data, and Semantic UI.

How to Run:

Clone or download zip from GitHub (http://github.com/leemahoney3/bewk).

In terminal (or alternative) type the following commands:

npm install

sudo npm install -g nodemon

sudo nodemon app.js

Note: I highly recommend using nodemon, as Node.js does not automatically refresh.

Technologies Used:
- Semantic UI
- Node.js
- Express
- Handlebars
- jQuery
- LowDB
- LoDash

Tasks Accomplished:

* Front page:
- Welcome paragraph
- Image
- Bookmark counter

* Bookmark pages:
- Group, can be deleted, added, have total bookmark count based on the bookmarks in that group.
- Bookmarks - can be added, deleted etc...
- If no groups or bookmarks, message pops up to alert you of this.
- If when adding groups or bookmarks, validation is required.

* About page:
- Mock address, telephone and email details.
- Google Maps Embedded using API.
- Contact form that submits (doesn't actually send an email).

Gomix URL:
http://bewk-iot.gomix.io/

GitHub URL:
http://github.com/leemahoney3/Bewk/


To Run outside GoMix:

1. In terminal move into the directory with the files.
2. Run sudo npm install to install dependencies.
3. When done simply run sudo node server.js
4. The project will be visible on http://localhost:4000
