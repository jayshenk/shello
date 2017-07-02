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
    new CardDescriptionView({ model: this.model });
  }
});
