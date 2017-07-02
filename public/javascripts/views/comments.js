var CommentsView = Backbone.View.extend({
  el: '#comments',
  template: App.templates.comments,
  events: {
    'input textarea': 'setButtonState',
    'submit': 'createComment'
  },
  setButtonState: function() {
    this.$('button').prop('disabled', !this.$('textarea').val().length);
  },
  createComment: function(e) {
    e.preventDefault();
    var body = this.$('textarea').val();
    if (!body.length) { return; }

    this.collection.create({
      body: body,
      cardID: this.collection.card.get('id')
    });
  },
  render: function() {
    this.$el.html(this.template());
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(model) {
    var commentView = new CommentView({ model: model });
    this.$('ul').append(commentView.render().el);
  },
  initialize: function() {
    this.render();
  }
});
