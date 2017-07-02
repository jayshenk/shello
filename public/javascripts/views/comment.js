var CommentView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.comment,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function() {
    this.$el.attr('data-id', this.model.get('id'));
  }
});
