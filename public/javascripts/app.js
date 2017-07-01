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
      position: this.lists.length
    });
  },
  renderCardDetail: function(model) {
    model.fetch({
      success: function() {
        new CardDetailView({ model: model });
      }
    });
  },
  editCard: function(model, offset) {
    var editCardView = new EditCardView({ model: model });
    editCardView.render(offset);
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('add_list', this.renderNewList);
    this.on('create_list', this.createList);
    this.on('show_card_detail', this.renderCardDetail);
    this.on('edit_card', this.editCard);
  },
  init: function(cardsJSON) {
    this.boardView = new BoardView();
    this.setupLists(cardsJSON);
    this.bindEvents();
  }
};
