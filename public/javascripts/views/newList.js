var NewListView = Backbone.View.extend({
  tagName: 'form',
  attributes: {
    id: 'new-list',
    action: '/',
    method: 'post'
  },
  template: App.templates.newList,
  events: {
    'click button': 'create',
    'blur input': 'destroy',
  },
  create: function() {
    var $input = this.$('input');
    var name = $input.val();
    $input.focus();
    if (name.length) { App.trigger('create_list', name); } 
  },
  destroy: function(e) {
    if (!$(e.relatedTarget).is('button')) { this.remove(); }
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.find('.add-list').append(this.$el);
    this.$('input').focus();
  },
  initialize: function() {
    this.render();
  }
});
