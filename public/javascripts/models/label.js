var Label = Backbone.Model.extend({
  initialize: function() {
    this.on('change:name change:color', function() { this.save(); });
  }
});
