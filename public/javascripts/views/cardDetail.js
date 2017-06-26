var CardDetailView = Backbone.View.extend({
  id: 'card-detail',
  template: App.templates.cardDetail,
  events: {
    'click': 'destroy'
  },
  destroy: function(e) {
    if ($(e.target).attr('id') === 'card-detail') {
      this.remove();
    }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.append(this.el);
  },
  initialize: function() {
    this.render();
  }
});
