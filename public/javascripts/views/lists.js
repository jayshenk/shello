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
    this.listenTo(this.collection, 'add', this.renderOne);
  }
});
