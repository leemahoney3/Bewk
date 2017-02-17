'use strict';

/* Database class, inherits lowdb */

const lowdb     = require('lowdb');
const fileASync = require('lowdb/lib/file-async');


class Database {

  constructor(file, defaults) {

    this.db = lowdb(file, { storage: fileASync });
    this.db.defaults(defaults).value();

  }

  add(collection, object) {

    this.db.get(collection).push(object).value();

  }

  remove(collection, object) {

    this.db.get(collection).remove(object).value();

  }

  findAll(collection) {

    return this.db.get(collection).value();

  }

  findOneBy(collection, filter) {

    const results = this.db.get(collection).filter(filter).value();
    return results[0];

  }

}

module.exports = Database;
