var CardDueDateView = Backbone.View.extend({
  el: '#card-due-date',
  template: App.templates.cardDueDate,
  render: function() {
    var dueDate = this.model.get('dueDate');
    if (dueDate) { dueDate = moment(dueDate).format('MMM D'); }
    this.$el.html(this.template({ dueDate: dueDate }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change:dueDate', this.render);
  }
});
