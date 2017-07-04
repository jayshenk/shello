var ListsView = Backbone.View.extend({
  el: '#lists',
  addListTemplate: App.templates.addList,
  events: {
    'click .add-list': 'addList'
  },
  addList: function(e) {
    e.preventDefault();
    App.trigger('add_list');
  },
  setupListsDrake: function() {
    this.listsDrake = dragula([this.el], {
      invalid: function(el, handle) {
        var $el = $(el);
        return $el.is('a') || $el.is('.cards-container');
      },
      accepts: function(el, target, source, sibling) {
        return sibling;
      }
    });

    this.listsDrake.on('drop', this.saveListPositions.bind(this));
  },
  saveListPositions: function() {
    var self = this;
    this.$('.list').each(function(index) {
      var id = $(this).data('id');
      var list = self.collection.get(id);
      list.set('position', index);
    });
  },
  saveCardPositions: function(el, target, source) {
    var cardID = $(el).data('id');
    if (target !== source) {
      this.moveCard(cardID, target, source);
    }
    _([target, source]).uniq().forEach(function(el) {
      var listID = $(el).closest('.list').data('id');
      var list = this.collection.get(listID);
      list.trigger('update_card_positions');
    }, this);
  },
  moveCard: function(cardID, target, source) {
    var sourceID = $(source).closest('.list').data('id');
    var targetID = $(target).closest('.list').data('id');
    var sourceList = this.collection.get(sourceID);
    var targetList = this.collection.get(targetID);
    var card = sourceList.cards.remove(cardID);

    targetList.cards.add(card, { silent: true });
    card.set('listID', targetID);
  },
  setupCardsDrake: function() {
    this.cardsDrake = dragula($(this.$('.cards')).toArray());
    this.cardsDrake.on('drop', this.saveCardPositions.bind(this));
  },
  render: function() {
    this.$el.append(this.addListTemplate());
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(model) {
    var listView = new ListView({ model: model });
    this.$('.add-list').before(listView.render().el);
    return listView;
  },
  setupAddedList: function(model) {
    var listView = this.renderOne(model);
    this.cardsDrake.containers.push(listView.$('.cards').get(0));
  },
  initialize: function() {
    this.render();
    this.setupListsDrake();
    this.setupCardsDrake();
    this.listenTo(this.collection, 'add', this.setupAddedList);
  }
});
