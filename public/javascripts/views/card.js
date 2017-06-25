var CardView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.card,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
