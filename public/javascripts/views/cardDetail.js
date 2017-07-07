var CardDetailView = Backbone.View.extend({
  id: 'card-detail',
  template: App.templates.cardDetail,
  events: {
    'blur #title': 'updateTitle',
    'click a.labels': 'renderLabels',
    'click a.due-date': 'renderDueDate',
    'click .fa-plus': 'renderLabels',
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
  renderCardLabels: function() {
    new CardLabelsView({ model: this.model });
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
  renderLabels: function(e) {
    e.preventDefault();
    var offset = $(e.target).offset();
    var labelsView = new LabelsView({ collection: App.labels });
    labelsView.card = this.model;
    offset.top = offset.top += 46;
    labelsView.render(offset);
  },
  renderDueDate: function(e) {
    e.preventDefault();
    var offset = $(e.target).offset();
    var dueDateView = new DueDateView({ model: this.model });
    offset.top = offset.top += 46;
    dueDateView.render(offset);
  },
  renderMove: function(e) {
    e.preventDefault();
    var offset = $(e.target).offset();
    var moveCardView = new MoveCardView({ model: this.model });
    moveCardView.render(offset);
  },
  initialize: function() {
    this.render();
    this.renderCardLabels();
    this.renderDescription();
    this.renderComments();
  }
});
