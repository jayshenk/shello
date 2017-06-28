var ListView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.list,
  events: {
    'click .add-card': 'addCard'
  },
  addCard: function(e) {
    e.preventDefault();
    var newCardView = new NewCardView();

    this.$('.add-card').before(newCardView.render().el);
    newCardView.focus();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
