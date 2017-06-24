var path = require("path");
var _ = require("underscore");
var Cards = require(path.resolve(path.dirname(__dirname), "modules/cards"));

module.exports = function(router) {
  router.route("/cards").get(function(req, res) {
    res.json(Cards.get());
  }).post(function(req, res) {
    var card = req.body;
    var cards = Cards.get();

    card.id = Cards.getLastID() + 1;
    cards.push(card);
    Cards.set(cards);
    res.json(card);
  }).put(function(req, res) {
    var cards = Cards.get();
    var current_card = _(cards).findWhere({ id: +req.body.id });

    _.extend(current_card, req.body);
    Cards.set(cards);
    res.json(current_card);
  }).delete(function(req, res) {
    var cards = _(Cards.get()).reject(function(a) {
      return a.id === +req.body.id;
    });

    Cards.set(cards);
    res.status(200).end();
  });
};
