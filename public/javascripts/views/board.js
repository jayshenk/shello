var BoardView = Backbone.View.extend({
  el: 'body',
  template: App.templates.board,
  events: {
    'click .search': 'openSearch'
  },
  openSearch: function() {
    this.searchView = new SearchView();
    this.$('.search').before(this.searchView.el);
    this.searchView.render();
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});
