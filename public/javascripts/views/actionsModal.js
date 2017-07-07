var ActionsModalView = Backbone.View.extend({
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  destroy: function(e) {
    if (e.target === this.el) { this.remove(); }
  },
  setMargin: function(offset) {
    this.$('.actions-modal').css({
      'margin-top': offset.top,
      'margin-left': offset.left
    });
  }
});
