const orm = require("../config/orm");

const burger = {
  all: function(cb) {
    // on line 6 burgers is the table input
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", name, cb);
  },
  update: function(id, cb) {
    orm.update("burgers", id, cb);
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
