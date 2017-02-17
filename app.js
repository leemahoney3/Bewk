'use strict';

const path        = require('path');
const express     = require('express');
const bodyParser  = require('body-parser');
const handlebars  = require('express-handlebars');

const routes      = require('./routes');

const app         = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);

app.engine('.hbs', handlebars({
  extname: '.hbs',
  defaultLayout: 'main'
}));

app.set('view engine', '.hbs');

const listener = app.listen(process.env.PORT || 4000, function () {
  console.info(`Bewk started on port ${listener.address().port}`);
});
