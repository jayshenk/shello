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
    'submit': 'createCard'
  },
  checkForSubmit: function(e) {
    if (e.which === 13) {
      this.$el.trigger('submit');
    }
  },
  createCard: function(e) {
    e.preventDefault();
    var title = this.$('textarea').val()

    this.remove();
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
