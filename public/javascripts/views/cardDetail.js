var CardDetailView = Backbone.View.extend({
  id: 'card-detail',
  template: App.templates.cardDetail,
  events: {
    'blur #title': 'updateTitle',
    'click': 'destroy'
  },
  updateTitle: function() {
    var title = this.$('#title').val();
    this.model.trigger('update_title', title);
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
  initialize: function() {
    this.render();
    this.renderDescription();
    this.renderComments();
  }
});
