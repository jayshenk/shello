var BoardView = Backbone.View.extend({
  el: 'body',
  template: App.templates.board,
  events: {
    'click #search': 'renderSearch',
    'click': 'removeSearch'
  },
  renderSearch: function() {
    this.searchView.render();
  },
  removeSearch: function(e) {
    if (!$(e.target).closest('#search').length) {
      this.searchView.destroy();
    }
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
    this.searchView = new SearchView();
  }
});
