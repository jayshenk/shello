var Card = Backbone.Model.extend({
  setupComments: function() {
    this.comments = new Comments();
    this.comments.card = this;
    this.comments.url = '/cards/' + this.get('id') + '/comments';
  },
  initialize: function() {
    this.setupComments();
    this.on('change:title change:description', function() { this.save(); });
    this.on('moved', function() { this.save(); });
  }
});
