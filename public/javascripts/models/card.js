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
  updateLabel: function(updatedLabel) {
    var labels = this.get('labels');
    var label = _(labels).findWhere({
      id: updatedLabel.get('id')
    });

    _(label).extend(updatedLabel.toJSON());
    this.set('labels', labels);
    this.trigger('labels_updated');
  },
  store: function() {
    this.save();
  },
  messagePrefix: function() {
    return 'Card "' + this.get('title') + '": ';
  },
  notifyTitle: function(model, attribute) {
    if (!this.get('subscribed')) { return; }
    var message = this.messagePrefix() + 'title was changed from  "';
    message += model.previous('title') + '" to "' + attribute + '"';

    App.trigger('notification', message);
  },
  notifyDescription: function() {
    if (!this.get('subscribed')) { return; }
    var message = this.messagePrefix() + 'description was changed to "';
    message += this.get('description') + '"';

    App.trigger('notification', message);
  },
  notifyDueDate: function() {
    if (!this.get('subscribed')) { return; }
    var message = this.messagePrefix() + 'due date was changed to ';
    message += moment(this.get('dueDate')).format('MMMM Do');

    App.trigger('notification', message);
  },
  notifyLabels: function() {
    if (!this.get('subscribed')) { return; }
    var message = this.messagePrefix() + 'labels were changed';
 
    App.trigger('notification', message);
  },
  notifyComment: function(model) {
    if (!this.get('subscribed')) { return; }
    var message = this.messagePrefix() + 'a comment was added: "';
    message += model.get('body') + '"';

    App.trigger('notification', message);
  },
  initialize: function() {
    this.setupComments();
    this.on('change:title change:dueDate change:subscribed', this.store);
    this.on('moved description_updated labels_updated', this.store);
    this.on('add_label', this.addLabel);
    this.on('remove_label', this.removeLabel);
    this.on('change:title', this.notifyTitle);
    this.on('description_updated', this.notifyDescription);
    this.on('change:dueDate', this.notifyDueDate);
    this.on('labels_updated', this.notifyLabels);
    this.listenTo(App, 'label_changed', this.updateLabel);
    this.listenTo(App, 'label_deleted', this.removeLabel);
    this.listenTo(this.comments, 'add', this.notifyComment);
  }
});
