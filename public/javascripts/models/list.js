var List = Backbone.Model.extend({
  initialize: function() {
    this.cards = new Cards();
    this.on('position_updated', this.save);
  }
});
