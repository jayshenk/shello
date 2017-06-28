var NewCardView = Backbone.View.extend({
  tagName: 'form',
  attributes: {
    id: 'new-card',
    action: '/',
    method: 'post'
  },
  template: App.templates.newCard,
  events: {
    'keypress': 'checkForSubmit',
    'blur textarea': 'destroy',
  },
  checkForSubmit: function(e) {
    if (e.which === 13) {
      this.$el.trigger('submit');
    }
  },
  focus: function() {
    this.$('textarea').focus();
  },
  destroy: function(e) {
    if (!$(e.relatedTarget).is('button')) { this.remove(); }
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
