var path = require("path");
var _ = require("underscore");
var Labels = require(path.resolve(path.dirname(__dirname), "modules/labels"));

module.exports = function(router) {
  router.route("/labels").get(function(req, res) {
    res.json(Labels.get());
  }).post(function(req, res) {
    var label = req.body;
    var labels = Labels.get();

    label.id = Labels.getLastID() + 1;
    labels.push(label);
    Labels.set(labels);
    res.json(label);
  });

  router.route("/labels/:id").get(function(req, res) {
    var label = _(Labels.get()).findWhere({ id: Number(req.params.id) });
    res.json(label);
  }).put(function(req, res) {
    var labels = Labels.get();
    var currentLabel = _(labels).findWhere({ id: Number(req.params.id) });

    _.extend(currentLabel, req.body);
    Labels.update(labels);
    res.json(currentLabel);
  }).delete(function(req, res) {
    var labels = _(Labels.get()).reject(function(label) {
      return label.id === Number(req.params.id);
    });

    Labels.update(labels);
    res.status(200).end();
  });
};
