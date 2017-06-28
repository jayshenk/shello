var App = {
  templates: JST,
  $el: $(document.body),
  setupLists: function(cardsJSON) {
    this.lists.each(function(list) {
      list.cards = new Cards(_(cardsJSON).where({ listID: list.get('id') }));
    }.bind(this));
    this.renderLists();
  },
  renderLists: function() {
    new ListsView({ collection: this.lists });
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
  init: function(cardsJSON) {
    this.boardView = new BoardView();
    this.setupLists(cardsJSON);
    this.bindEvents();
  }
};
