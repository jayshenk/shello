var Card = Backbone.Model.extend({
  initialize: function() {
    this.on('position_updated', this.save);
  }
});
