var Cards = Backbone.Collection.extend({
  model: Card,
  url: '/cards',
  comparator: 'position',
  decrementPositions: function(removedModel) {
    this.filter(function(model) {
      return model.get('position') > removedModel.get('position');
    }).forEach(function(model) {
      model.set('position', model.get('position') - 1);
      model.trigger('moved');
    });
  },
  incrementPositions: function(addedModel) {
    this.filter(function(model) {
      if (model === addedModel) { return false; }
      return model.get('position') >= addedModel.get('position');
    }).forEach(function(model) {
      model.set('position', model.get('position') + 1);
      model.trigger('moved');
    });
  },
  initialize: function() {
    this.on('add', this.incrementPositions);
    this.on('remove', this.decrementPositions);
  }
});
