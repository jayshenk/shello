var SearchCardsView = Backbone.View.extend({
  el: '#search-cards',
  template: App.templates.searchCards,
  events: {
    'click .card': 'getCardDetail'
  },
  getCardDetail: function(e) {
    var $el = $(e.currentTarget);
    var cardID = $el.data('id');
    var listID = $el.data('list-id');
    console.log(listID);
    var card = App.lists.get(listID).cards.get(cardID);

    App.trigger('show_card_detail', card);
  },
  render: function(cardsJSON) {
    if (cardsJSON.length) {
      this.$el.html(this.template({ cards: cardsJSON }));
    } else {
      this.$el.html('<p>We couldn\'t find any cards that matched your search.</p>');
    }
  }
});
