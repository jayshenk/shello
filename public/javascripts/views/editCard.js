var EditCardView = Backbone.View.extend({
  tagName: 'form',
  attributes: {
    id: 'edit-card',
    action: '#',
    method: 'post'
  },
  template: App.templates.editCard,
  events: {
    'keypress': 'checkForSubmit',
    'submit': 'updateCard',
    'click': 'destroy'
  },
  checkForSubmit: function(e) {
    if (e.which === 13) {
      this.$el.trigger('submit');
    }
  },
  updateCard: function(e) {
    e.preventDefault();
    var title = this.$('textarea').val();
    this.model.set('title', title);
    this.model.save();
    this.remove();
  },
  destroy: function(e) {
    if ($(e.target).attr('id') === 'edit-card') {
      this.remove();
    }
  },
  render: function(offset) {
    this.$el.html(this.template(this.model.toJSON()));
    this.$('fieldset').css({
      'margin-left': offset.left,
      'margin-top': offset.top
    });
    App.$el.append(this.el);
    this.$('textarea').select();
  }
});
