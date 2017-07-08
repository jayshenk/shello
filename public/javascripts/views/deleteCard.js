var DeleteCardView = ActionsModalView.extend({
  id: 'delete-card',
  className: 'modal-backdrop',
  template: App.templates.deleteCard,
  events: {
    'click .delete': 'deleteModel',
    'click a.close': 'close',
    'click': 'destroy'
  },
  deleteModel: function() {
    this.model.destroy();
    this.remove();
  },
  render: function(offset) {
    this.$el.html(this.template());
    this.setMargin(offset);
    App.$el.append(this.el);
  }
});
