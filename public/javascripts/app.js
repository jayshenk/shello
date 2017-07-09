var App = {
  templates: JST,
  $el: $(document.body),
  notifications: [],
  setupLists: function(cardsJSON) {
    this.lists.each(function(list) {
      list.cards = new Cards(_(cardsJSON).where({ listID: list.get('id') }));
      list.cards.list = list;
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
    }, { wait: true });
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
  moveCard: function(card, listID, position) {
    var sourceList = card.collection.list;
    var destinationList = this.lists.get(listID);

    sourceList.cards.remove(card);
    card.set({
      listID: listID,
      position: position
    });
    destinationList.cards.add(card);
    card.trigger('moved');
  },
  copyCard: function(model, listID, position) {
    var list = this.lists.get(listID);
    var card = list.cards.create({
      title: model.get('title'),
      description: model.get('description'),
      listID: listID,
      position: position
    }, { wait: true });
  },
  addNotification: function(message) {
    this.notifications.unshift(message);
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('add_list', this.renderNewList);
    this.on('create_list', this.createList);
    this.on('show_card_detail', this.renderCardDetail);
    this.on('edit_card', this.editCard);
    this.on('move_card', this.moveCard);
    this.on('copy_card', this.copyCard);
    this.on('notification', this.addNotification);
  },
  init: function(cardsJSON) {
    this.boardView = new BoardView();
    this.setupLists(cardsJSON);
    this.bindEvents();
  }
};
