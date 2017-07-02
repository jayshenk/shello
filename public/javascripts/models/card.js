var Card = Backbone.Model.extend({
  updateTitle: function(title) {
    this.set('title', title);
    this.save();
  },
  updateDescription: function(description) {
    this.set('description', description);
    this.save();
  },
  initialize: function() {
    this.on('update_title', this.updateTitle);
    this.on('update_description', this.updateDescription);
    this.on('position_updated', this.save);
  }
});
