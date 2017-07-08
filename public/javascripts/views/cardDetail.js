var CardDetailView = Backbone.View.extend({
  id: 'card-detail',
  template: App.templates.cardDetail,
  events: {
    'blur #title': 'updateTitle',
    'click a.labels': 'renderLabels',
    'click a.due-date': 'renderDueDate',
    'click .fa-plus': 'renderLabels',
    'click a.move': 'renderMove',
    'click a.copy': 'renderCopy',
    'click a.delete-card': 'renderDelete',
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
    this.renderCardLabels();
    this.renderCardDueDate();
    this.renderDescription();
    this.renderComments();
  },
  renderCardLabels: function() {
    new CardLabelsView({ model: this.model });
  },
  renderCardDueDate: function() {
    new CardDueDateView({ model: this.model });
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
  getOffset: function(e) {
    var offset = $(e.target).offset();
    offset.top = offset.top += 46;
    return offset;
  },
  renderLabels: function(e) {
    e.preventDefault();
    var offset = this.getOffset(e);
    var labelsView = new LabelsView({ collection: App.labels });
    labelsView.card = this.model;
    labelsView.render(offset);
  },
  renderDueDate: function(e) {
    e.preventDefault();
    var offset = this.getOffset(e);
    var dueDateView = new DueDateView({ model: this.model });
    dueDateView.render(offset);
  },
  renderMove: function(e) {
    e.preventDefault();
    var offset = this.getOffset(e);
    var moveCardView = new MoveCardView({ model: this.model });
    moveCardView.render(offset);
  },
  renderCopy: function(e) {
    e.preventDefault();
    var offset = this.getOffset(e);
    var copyCardView = new CopyCardView({ model: this.model });
    copyCardView.render(offset);
  },
  renderDelete: function(e) {
    e.preventDefault();
    var offset = this.getOffset(e);
    var deleteCardView = new DeleteCardView({ model: this.model });
    deleteCardView.render(offset);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
  }
});
