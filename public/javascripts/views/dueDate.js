var DueDateView = ActionsModalView.extend({
  id: 'due-date',
  className: 'modal-backdrop',
  template: App.templates.dueDate,
  events: {
    'submit': 'setDueDate',
    'click .delete': 'removeDueDate',
    'click a.close': 'close',
    'click': 'destroy',
  },
  setupDatePicker: function() {
    new Pikaday({
      field: this.$('#datepicker').get(0),
      bound: false,
      container: this.$('#calendar').get(0),
      format: 'M/D/YYYY'
    });
  },
  setDueDate: function(e) {
    e.preventDefault();
    var dueDate = this.$('input').val();

    this.model.set('dueDate', dueDate);
    this.remove();
  },
  removeDueDate: function(e) {
    e.preventDefault();
    this.model.set('dueDate', '');
    this.remove();
  },
  selectInput: function() {
    this.$('input').select();
  },
  render: function(offset) {
    var dueDate = this.model.get('dueDate') || moment().format('M/D/YYYY');

    this.$el.html(this.template({ dueDate: dueDate }));
    this.setMargin(offset);
    App.$el.append(this.el);
    this.setupDatePicker();
    this.selectInput();
  }
});
