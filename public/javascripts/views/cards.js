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
  updatePositions: function() {
    var self = this;
    this.$('.card').each(function(index) {
      var id = $(this).data('id');
      var card = self.collection.get(id);
      card.set('position', index);
      card.trigger('position_updated');
    });
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOne);
    this.on('update_positions', this.updatePositions);
  }
});
