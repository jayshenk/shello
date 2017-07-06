var CardLabelsView = Backbone.View.extend({
  el: '#card-labels',
  template: App.templates.cardLabels,
  render: function() {
    this.$el.html(this.template({ labels: this.model.get('labels') }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'labels_updated', this.render);
  }
});
