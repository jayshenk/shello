var BoardView = Backbone.View.extend({
  el: 'body',
  template: App.templates.board,
  events: {
    'click .add-list': 'addList'
  },
  addList: function(e) {
    e.preventDefault();
    App.trigger('add_list');
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});
