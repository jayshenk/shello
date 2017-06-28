var App = {
  templates: JST,
  $el: $(document.body),
  setupLists: function() {
    this.lists.each(this.assignCardsToList.bind(this));
    this.renderLists();
  },
  assignCardsToList: function(list) {
    list.cards = new Cards(this.cards.where({ listID: list.get('id') }));
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
  init: function() {
    var boardView = new BoardView();
    this.setupLists();
    this.bindEvents();
  }
};
