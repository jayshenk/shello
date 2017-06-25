var CardView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.card,
  events: {
    'click': 'showDetail'
  },
  showDetail: function() {
    App.trigger('show_card_detail', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
