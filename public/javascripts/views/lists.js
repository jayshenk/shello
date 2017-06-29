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
      list.save();
    });
  },
  setupCardsDrake: function() {
    this.cardsDrake = dragula($(this.$('.cards')).toArray());
  },
  render: function() {
    this.$el.append(this.addListTemplate());
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(model) {
    var listView = new ListView({ model: model });
    this.$('.add-list').before(listView.render().el);
  },
  initialize: function() {
    this.render();
    this.setupListsDrake();
    this.setupCardsDrake();
    this.listenTo(this.collection, 'add', this.renderOne);
  }
});
