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
  removeOne: function(model) {
    this.$('[data-id="' + model.get('id') + '"]').remove();
  },
  updatePositions: function() {
    if (!this.$('.card').length) { return; }
    var self = this;
    this.$('.card').each(function(index) {
      var id = $(this).data('id');
      var card = self.collection.get(id);
      card.set('position', index + 1);
      card.trigger('moved');
    });
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOne);
    this.listenTo(this.collection, 'remove', this.removeOne);
    this.on('update_positions', this.updatePositions);
  }
});
