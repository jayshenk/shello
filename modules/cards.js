var path = require("path");
var fs = require("fs");
var file_path = path.resolve(path.dirname(__dirname), "data/dummy_cards.json");
var _ = require("underscore");

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8"));
  },

  getLastID: function() {
    return this.__readFile().last_id;
  },

  get: function() {
    return this.__readFile().data;
  },

  getInitialData: function() {
    return this.get().map(function(card) {
      return _(card).omit('description');
    });
  },

  set: function(data) {
    data.id = this.getLastID() + 1;
    this.write(data);
  },

  update: function(data) {
    data.id = this.getLastID();
    this.write(data);
  },

  write: function(data) {
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      data: data
    }), "utf8");
  }
};

