var CardsView = Backbone.View.extend({
  render: function() {
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(model) {
    var cardView = new CardView({ model: model });
    this.$el.append(cardView.render().el);
  },
  initialize: function() {
    this.render();
  }
});
