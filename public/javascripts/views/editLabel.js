var EditLabelView = ActionsModalView.extend({
  id: 'edit-label',
  className: 'modal-backdrop',
  template: App.templates.editLabel,
  events: {
    'click .label': 'selectColor',
    'submit': 'update',
    'click .delete': 'renderDelete',
    'click a.fa-arrow-left': 'renderLabels',
    'click a.close': 'close',
    'click': 'destroy'
  },
  selectInput: function() {
    this.$('input').select();
  },
  selectCurrentColor: function() {
    var $el = this.$('[data-color="' + this.model.get('color') + '"]');
    $el.addClass('checked');
  },
  selectColor: function(e) {
    this.$('.label').removeClass('checked');
    $(e.currentTarget).addClass('checked');
  },
  update: function(e) {
    e.preventDefault();
    var name = this.$('input').val();
    var color = this.$('li.checked').attr('data-color');

    this.model.set({ name: name, color: color });
    App.trigger('label_changed', this.model);
    this.renderLabels();
  },
  renderDelete: function(e) {
    e.preventDefault();
    var offset = this.$('.actions-modal').offset();
    var deleteLabelView = new DeleteLabelView({ model: this.model });

    deleteLabelView.card = this.card;
    deleteLabelView.render(offset);
    this.remove();
  },
  renderLabels: function(e) {
    if (e) { e.preventDefault(); }
    var offset = this.$('.actions-modal').offset();
    var labelsView = new LabelsView({ collection: App.labels });

    labelsView.card = this.card;
    labelsView.render(offset);
    this.remove();
  },
  render: function(offset) {
    this.$el.html(this.template({
      name: this.model.get('name'),
      colors: App.labels.colors
    }));
    this.setMargin(offset);
    this.selectCurrentColor();
    App.$el.append(this.el);
    this.selectInput();
  } 
});
