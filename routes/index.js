var path = require("path");
var Cards = require(path.resolve(path.dirname(__dirname), "modules/cards"));
var Lists = require(path.resolve(path.dirname(__dirname), "modules/lists"));

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      cards: Cards.get(),
      lists: Lists.get()
    });
  });
};
