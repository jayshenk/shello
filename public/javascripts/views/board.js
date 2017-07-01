var BoardView = Backbone.View.extend({
  el: 'body',
  template: App.templates.board,
  events: {
    'click #search': 'renderSearch',
    'click': 'removeSearch'
  },
  renderSearch: function() {
    this.searchView = this.searchView || (new SearchView());
  },
  removeSearch: function(e) {
    if (this.searchView && !$(e.target).closest('#search').length) {
      this.searchView.destroy();
      this.searchView = null;
    }
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});
