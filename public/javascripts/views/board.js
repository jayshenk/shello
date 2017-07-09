var BoardView = Backbone.View.extend({
  el: 'body',
  template: App.templates.board,
  events: {
    'click #search': 'renderSearch',
    'click a.notifications': 'renderNotifications',
    'click': 'removeSearch'
  },
  renderSearch: function() {
    this.searchView = this.searchView || (new SearchView());
  },
  removeSearch: function(e) {
    var $el = $(e.target);
    if (this.searchView && !$el.closest('#search').length || $el.is('#search .close')) {
      this.searchView.destroy();
      this.searchView = null;
    }
  },
  renderNotifications: function(e) {
    e.preventDefault();
    new NotificationsView();
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});
