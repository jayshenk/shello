var Card = Backbone.Model.extend({
  updateTitle: function(title) {
    this.set('title', title);
    this.save();
  },
  updateDescription: function(description) {
    this.set('description', description);
    this.save();
  },
  setupComments: function() {
    this.comments = new Comments();
    this.comments.card = this;
    this.comments.url = '/cards/' + this.get('id') + '/comments'
  },
  initialize: function() {
    this.setupComments();
    this.on('update_title', this.updateTitle);
    this.on('update_description', this.updateDescription);
    this.on('position_updated', this.save);
  }
});
