var CardsView = Backbone.View.extend({
  render: function() {
    var cards = this.collection.where({ listID: this.listID });
    cards.forEach(this.renderOne.bind(this));
  },
  renderOne: function(model) {
    var cardView = new CardView({ model: model });
    this.$el.append(cardView.render().el);
  },
  initialize: function() {
    this.listID = this.$el.data('list-id');
    this.render();
  }
});
