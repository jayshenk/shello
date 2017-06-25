var App = {
  templates: JST,
  $el: $(document.body),
  renderCards: function() {
    var self = this;
    this.$el.find('ul.cards').each(function() {
      new CardsView({ el: this, collection: self.cards });
    });
  },
  init: function() {
    var boardView = new BoardView();
    var listsView = new ListsView({ collection: this.lists });
    this.renderCards();
  }
};
