var NewLabelView = ActionsModalView.extend({
  id: 'new-label',
  className: 'modal-backdrop',
  template: App.templates.newLabel,
  events: {
    'submit': 'create',
    'click .label': 'selectLabel',
    'click a.fa-arrow-left': 'renderLabels',
    'click a.close': 'close',
    'click': 'destroy'
  },
  create: function(e) {
    e.preventDefault();
    var name = this.$('input').val();
    var color = this.$('li.checked').attr('data-color');

    this.collection.create({
      name: name,
      color: color
    }, {
      wait: true,
      success: this.renderLabels.bind(this)
    });
  },
  renderLabels: function(e) {
    if (e.which) { e.preventDefault(); }
    var offset = this.$('.actions-modal').offset();
    var labelsView = new LabelsView({ collection: this.collection });

    labelsView.card = this.card;
    labelsView.render(offset);
    this.remove();
  },
  focusInput: function() {
    this.$('input').focus();
  },
  selectFirstLabel: function() {
    this.$('.label').first().addClass('checked');
  },
  selectLabel: function(e) {
    this.$('.label').removeClass('checked');
    $(e.target).addClass('checked');
  },
  render: function(offset) {
    this.$el.html(this.template({ colors: this.collection.colors }));
    this.setMargin(offset);
    this.selectFirstLabel();
    App.$el.append(this.el);
    this.focusInput();
  }
});
