var MoveCardView = Backbone.View.extend({
  id: 'move-card',
  className: 'modal-backdrop',
  template: App.templates.moveCard,
  events: {
    'click a.close': 'close',
    'click': 'destroy'
  },
  close: function(e) {
    this.remove();
  },
  destroy: function(e) {
    if (e.target === this.el) { this.remove(); }
  },
  render: function(offset) {
    this.$el.html(this.template());
    App.$el.append(this.el);
    this.$('.actions-modal').css({
      'margin-top': offset.top += 46,
      'margin-left': offset.left
    });
  }
});
