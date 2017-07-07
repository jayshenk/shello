var LabelsView = ActionsModalView.extend({
  id: 'labels',
  className: 'modal-backdrop',
  template: App.templates.labels,
  events: {
    'click .label div': 'toggleLabel',
    'click a.new-label': 'renderNewLabel',
    'click a.close': 'close',
    'click': 'destroy'
  },
  toggleLabel: function(e) {
    var $el = $(e.target);
    var id = $el.closest('li').data('id');
    var label = this.collection.get(id);
    var event;

    $el.toggleClass('checked');
    event = $el.hasClass('checked') ? 'add_label' : 'remove_label';
    this.card.trigger(event, label);
  },
  selectCardLabels: function() {
    var cardLabelIDs = _(this.card.get('labels')).pluck('id');
    cardLabelIDs.forEach(function(id) {
      this.$('li[data-id="' + id + '"] div').addClass('checked');
    }, this);
  },
  renderNewLabel: function(e) {
    e.preventDefault();
    var offset = this.$('.actions-modal').offset();
    var newLabelView = new NewLabelView({ collection: this.collection });
    newLabelView.card = this.card;
    newLabelView.render(offset);
    this.remove();
  },
  render: function(offset) {
    this.$el.html(this.template({ labels: this.collection.toJSON() }));
    this.setMargin(offset);
    this.selectCardLabels();
    App.$el.append(this.el);
  }
});
