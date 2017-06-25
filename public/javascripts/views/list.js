var ListView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.list,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
