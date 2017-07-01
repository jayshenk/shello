var path = require("path");
var _ = require("underscore");
var Cards = require(path.resolve(path.dirname(__dirname), "modules/cards"));

module.exports = function(router) {
  router.get('/search', function(req, res) {
    var search = req.query.search;
    var cards = Cards.get().filter(function(card) {
      if (card.title.toLowerCase().includes(search)) { return true; }
      return card.description ? card.description.toLowerCase().includes(search) : false;
    }).map(function(card) {
      return _(card).pick('id', 'title', 'listID');
    });
    res.json(cards);
  });
};
