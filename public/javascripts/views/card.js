var CardView = Backbone.View.extend({
  tagName: 'li',
  className: 'card',
  template: App.templates.card,
  events: {
    'click i': 'editCard',
    'click': 'showDetail'
  },
  showDetail: function() {
    App.trigger('show_card_detail', this.model);
  },
  editCard: function(e) {
    e.stopPropagation();
    var offset = this.$el.offset();
    App.trigger('edit_card', this.model, offset);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function() {
    this.$el.attr('data-id', this.model.get('id'));
    this.listenTo(this.model, 'change:title', this.render);
  }
});
