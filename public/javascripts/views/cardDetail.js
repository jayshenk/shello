var CardDetailView = Backbone.View.extend({
  id: 'card-detail',
  template: App.templates.cardDetail,
  events: {
    'blur #title': 'updateTitle',
    'click a.move': 'renderMove',
    'click': 'destroy'
  },
  updateTitle: function() {
    var title = this.$('#title').val();
    this.model.set('title', title);
  },
  destroy: function(e) {
    if (e.target === this.el) { this.remove(); }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.append(this.el);
  },
  renderDescription: function() {
    new CardDescriptionView({ model: this.model });
  },
  renderComments: function() {
    this.model.comments.fetch({
      success: function() {
        new CommentsView({ collection: this.model.comments });
      }.bind(this)
    });
  },
  renderMove: function(e) {
    e.preventDefault();
    var offset = $(e.target).offset();
    var moveCardView = new MoveCardView({ model: this.model });
    moveCardView.render(offset);
  },
  initialize: function() {
    this.render();
    this.renderDescription();
    this.renderComments();
  }
});
