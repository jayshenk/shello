var CardsView = Backbone.View.extend({
  tagName: 'ul',
  className: 'cards',
  render: function() {
    this.collection.each(this.renderOne.bind(this));
    return this;
  },
  renderOne: function(model) {
    var cardView = new CardView({ model: model });
    this.$el.append(cardView.render().el);
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOne);
  }
});
