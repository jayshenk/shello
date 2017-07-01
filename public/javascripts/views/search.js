var SearchView = Backbone.View.extend({
  el: '#search',
  events: {
    'keyup input': 'getResults',
    'click .close': 'close'
  },
  resultsTemplate: App.templates.searchResults,
  getResults: function() {
    var search = this.$('input').val().toLowerCase();
    if (search.length < 3) {
      this.$('#search-cards').empty();
      return;
    }

    $.ajax({
      url: '/search',
      data: { search: search },
      success: this.renderResults.bind(this)
    });
  },
  render: function() {
    this.$el.addClass('active');
    this.$el.append(this.resultsTemplate());
  },
  renderResults: function(cardsJSON) {
    this.searchCardsView.render(cardsJSON);
  },
  close: function(e) {
    e.preventDefault();
  },
  destroy: function() {
    this.$el.removeClass('active');
    this.$('input').val('');
    this.$('#results').remove();
  },
  initialize: function() {
    this.render();
    this.searchCardsView = new SearchCardsView();
    this.listenTo(App, 'show_card_detail', this.destroy);
  }
});
