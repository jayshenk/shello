var BoardView = Backbone.View.extend({
  el: 'body',
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});
