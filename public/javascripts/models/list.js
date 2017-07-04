var List = Backbone.Model.extend({
  initialize: function() {
    this.cards = new Cards();
    this.cards.list = this;
    this.on('change', function() { this.save(); });
  }
});
