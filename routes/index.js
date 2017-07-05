var path = require("path");
var Cards = require(path.resolve(path.dirname(__dirname), "modules/cards"));
var Lists = require(path.resolve(path.dirname(__dirname), "modules/lists"));
var Labels = require(path.resolve(path.dirname(__dirname), "modules/labels"));

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      cards: Cards.getInitialData(),
      lists: Lists.get(),
      labels: Labels.get()
    });
  });
};
