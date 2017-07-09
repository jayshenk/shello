var NotificationsView = ActionsModalView.extend({
  id: 'notifications',
  className: 'modal-backdrop',
  template: App.templates.notifications,
  events: {
    'click a.close': 'close',
    'click': 'destroy'
  },
  render: function() {
    this.$el.html(this.template({ notifications: App.notifications }));
    App.$el.append(this.el);
  },
  initialize: function() {
    this.render();
  }
});
