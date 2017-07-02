var path = require("path");
var _ = require("underscore");
var Comments = require(path.resolve(path.dirname(__dirname), "modules/comments"));

module.exports = function(router) {
  router.route("/cards/:cardID/comments").get(function(req, res) {
    var comments = _(Comments.get()).where({ cardID: Number(req.params.cardID) });
    res.json(comments);
  }).post(function(req, res) {
    var comment = req.body;
    var comments = Comments.get();

    comment.id = Comments.getLastID() + 1;
    comments.push(comment);
    Comments.set(comments);
    res.json(comment);
  });

  router.route("/cards/:cardID/comments/:id").get(function(req, res) {
    var comment = _(Comments.get()).findWhere({ id: Number(req.params.id) });
    res.json(comment);
  }).put(function(req, res) {
    var comments = Comments.get();
    var currentComment = _(comments).findWhere({ id: Number(req.params.id) });

    _.extend(currentComment, req.body);
    Comments.update(comments);
    res.json(currentComment);
  }).delete(function(req, res) {
    var comments = _(Comments.get()).reject(function(comment) {
      return comment.id === Number(req.params.id);
    });

    Comments.update(comments);
    res.status(200).end();
  });
};
