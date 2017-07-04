var MoveCardView = Backbone.View.extend({
  id: 'move-card',
  className: 'modal-backdrop',
  template: App.templates.moveCard,
  positionsTemplate: App.templates.positions,
  events: {
    'click a.close': 'close',
    'click': 'destroy',
    'change #list': 'renderPositions',
    'submit': 'moveCard'
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  destroy: function(e) {
    if (e.target === this.el) { this.remove(); }
  },
  moveCard: function(e) {
    e.preventDefault();
    var listID = this.$('#list').val();
    var position = this.$('#position').val();

    App.trigger('move_card', this.model, listID, position);
  },
  selectCurrentList: function() {
    var list = this.model.collection.list;
    this.$('#list option[value="' + list.get('id') + '"]')
      .prop('selected', true);
  },
  selectCurrentPosition: function() {
    this.$('#position option[value="' + this.model.get('position') + '"]')
      .prop('selected', true);
  },
  selectLastPosition: function() {
    this.$('#position option').last().prop('selected', true);
  },
  render: function(offset) {
    var lists = App.lists;
    var currentList = this.model.collection.list;
    var positions = _.range(1, currentList.cards.length + 1);

    this.$el.html(this.template({
      lists: lists.toJSON(),
      positions: positions
    }));
    this.selectCurrentList();
    this.selectCurrentPosition();
    this.$('.actions-modal').css({
      'margin-top': offset.top += 46,
      'margin-left': offset.left
    });
    App.$el.append(this.el);
  },
  renderPositions: function(e) {
    var listID = $(e.target).val();
    var list = App.lists.get(listID);
    var positions = _.range(1, list.cards.length + 1);

    if (list != this.model.collection.list && positions.length) {
      positions.push(positions.length + 1);
    }
    if (!positions.length) { positions = [1]; }

    this.$('#position').html(this.positionsTemplate({ positions: positions }));
    if (list === this.model.collection.list) {
      this.selectCurrentPosition();
    } else {
      this.selectLastPosition();
    }
  }
});
