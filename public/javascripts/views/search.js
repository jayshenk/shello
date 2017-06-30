var SearchView = Backbone.View.extend({
  el: '#search',
  events: {
    'click .close': 'close'
  },
  resultsTemplate: App.templates.searchResults,
  render: function() {
    this.$el.addClass('active');
    this.$el.append(this.resultsTemplate());
  },
  close: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.destroy();
  },
  destroy: function() {
    this.$el.removeClass('active');
    this.$('#results').remove();
  }
});
