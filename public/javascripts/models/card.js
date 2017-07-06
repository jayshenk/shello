var Card = Backbone.Model.extend({
  defaults: function() {
    return {
      "labels": []
    }
  },
  setupComments: function() {
    this.comments = new Comments();
    this.comments.card = this;
    this.comments.url = '/cards/' + this.get('id') + '/comments';
  },
  addLabel: function(label) {
    var labels = this.get('labels');
    labels.push(label.toJSON());
    this.set('labels', labels);
    this.trigger('labels_updated');
  },
  removeLabel: function(label) {
    var labels = _(this.get('labels')).reject(function(item) {
      return item.id === label.get('id');
    });
    this.set('labels', labels);
    this.trigger('labels_updated');
  },
  store: function() {
    this.save();
  },
  initialize: function() {
    this.setupComments();
    this.on('change:title change:description labels_updated', this.store);
    this.on('moved', this.store);
    this.on('add_label', this.addLabel);
    this.on('remove_label', this.removeLabel);
  }
});
