var ListView = Backbone.View.extend({
  tagName: 'li',
  attributes: {
    class: 'list',
  },
  template: App.templates.list,
  events: {
    'click .add-card': 'addCard',
    'submit': 'createCard'
  },
  addCard: function(e) {
    e.preventDefault();
    this.newCardView = new NewCardView();
    this.$('.add-card').before(this.newCardView.render().el);
    this.newCardView.focus();
  },
  createCard: function(e) {
    e.preventDefault();
    this.model.cards.create({
      title: this.$('textarea').val(),
      listID: this.model.get('id')
    });
    this.newCardView.remove();
  },
  updateCardPositions: function() {
    this.cardsView.trigger('update_positions');
  },
  renderCards: function() {
    this.cardsView = new CardsView({ collection: this.model.cards });
    this.$('.cards-container').append(this.cardsView.render().el);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.renderCards();
    return this;
  },
  initialize: function() {
    this.$el.attr('data-id', this.model.get('id'));
    this.listenTo(this.model, 'update_card_positions', this.updateCardPositions);
  }
});
