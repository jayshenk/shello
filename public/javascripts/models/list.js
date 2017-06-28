var List = Backbone.Model.extend({
  initialize: function() {
    this.cards = new Cards();
  }
});
