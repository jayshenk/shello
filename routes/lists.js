var path = require("path");
var _ = require("underscore");
var Lists = require(path.resolve(path.dirname(__dirname), "modules/lists"));

module.exports = function(router) {
  router.route("/lists").get(function(req, res) {
    res.json(Lists.get());
  }).post(function(req, res) {
    var list = req.body;
    var lists = Lists.get();

    list.id = Lists.getLastID() + 1;
    lists.push(list);
    Lists.set(lists);
    res.json(list);
  });

  router.route("/lists/:id").get(function(req, res) {
    var list = _(Lists.get()).findWhere({ id: Number(req.params.id) });
    res.json(list);
  }).put(function(req, res) {
    var lists = Lists.get();
    var currentList = _(lists).findWhere({ id: Number(req.params.id) });

    _.extend(currentList, req.body);
    Lists.update(lists);
    res.json(currentList);
  }).delete(function(req, res) {
    var lists = _(Lists.get()).reject(function(list) {
      return list.id === Number(req.params.id);
    });

    Lists.update(lists);
    res.status(200).end();
  });
};
