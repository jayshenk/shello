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
  }).put(function(req, res) {
    var lists = Lists.get();
    var current_list = _(lists).findWhere({ id: +req.body.id });

    _.extend(current_list, req.body);
    Lists.set(lists);
    res.json(current_list);
  }).delete(function(req, res) {
    var lists = _(Lists.get()).reject(function(a) {
      return a.id === +req.body.id;
    });

    Lists.set(lists);
    res.status(200).end();
  });
};
