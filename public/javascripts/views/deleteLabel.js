var DeleteLabelView = ActionsModalView.extend({
  id: 'delete-label',
  className: 'modal-backdrop',
  template: App.templates.deleteLabel,
  events: {
    'click a.close': 'close',
    'click a.fa-arrow-left': 'renderEdit',
    'click .delete': 'destroyLabel',
    'click': 'destroy'
  },
  destroyLabel: function(e) {
    e.preventDefault();
    App.trigger('label_deleted', this.model);
    this.model.destroy();
    this.renderLabels();
  },
  renderEdit: function(e) {
    e.preventDefault();
    var offset = this.$('.actions-modal').offset();
    var editLabelView = new EditLabelView({ model: this.model });

    editLabelView.card = this.card;
    editLabelView.render(offset);
    this.remove();
  },
  renderLabels: function() {
    var offset = this.$('.actions-modal').offset();
    var labelsView = new LabelsView({ collection: App.labels });

    labelsView.card = this.card;
    labelsView.render(offset);
    this.remove();
  },
  render: function(offset) {
    this.$el.html(this.template());
    this.setMargin(offset);
    App.$el.append(this.el);
  } 
});
