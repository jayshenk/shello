var NewLabelView = ActionsModalView.extend({
  id: 'new-label',
  className: 'modal-backdrop',
  template: App.templates.newLabel,
  events: {
    'click a.fa-arrow-left': 'renderLabels',
    'click a.close': 'close',
    'click': 'destroy'
  },
  renderLabels: function(e) {
    e.preventDefault();
    var offset = this.$('.actions-modal').offset();
    var labelsView = new LabelsView({ collection: this.collection });

    labelsView.card = this.card;
    labelsView.render(offset);
    this.remove();
  },
  render: function(offset) {
    this.$el.html(this.template({ colors: this.collection.colors }));
    this.setMargin(offset);
    App.$el.append(this.el);
  }
});
