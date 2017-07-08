var CardsView = Backbone.View.extend({
  tagName: 'ul',
  className: 'cards',
  render: function() {
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
    return this;
  },
  renderOne: function(model) {
    var cardView = new CardView({ model: model });
    this.$el.append(cardView.render().el);
  },
  renderOneAtPosition: function(model) {
    var cardView = new CardView({ model: model });
    var cardEl = cardView.render().el;
    var position = model.get('position');
    if (position === 1) {
      this.$el.prepend(cardEl);
    } else {
      this.$('.card').eq(position - 2).after(cardEl);
    }
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
    this.listenTo(this.collection, 'add', this.renderOneAtPosition);
    this.listenTo(this.collection, 'remove', this.removeOne);
    this.on('update_positions', this.updatePositions);
  }
});
