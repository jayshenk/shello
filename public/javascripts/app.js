var App = {
  templates: JST,
  $el: $(document.body),
  renderCards: function() {
    var cards = this.cards;
    this.$el.find('ul.cards').each(function() {
      new CardsView({ el: this, collection: cards });
    });
  },
  renderNewList: function() {
    new NewListView();
  },
  createList: function(name) {
    this.lists.create({
      name: name,
      position: this.lists.length + 1
    });
  },
  renderCardDetail: function(model) {
    model.fetch({
      success: function() {
        new CardDetailView({ model: model });
      }
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('add_list', this.renderNewList);
    this.on('create_list', this.createList);
    this.on('show_card_detail', this.renderCardDetail);
  },
  init: function() {
    var boardView = new BoardView();
    var listsView = new ListsView({ collection: this.lists });
    this.renderCards();
    this.bindEvents();
  }
};
