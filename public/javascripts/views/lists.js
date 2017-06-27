var ListsView = Backbone.View.extend({
  el: '#lists',
  render: function() {
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(model) {
    var listView = new ListView({ model: model });
    this.$el.append(listView.render().el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.renderOne);
  }
});
