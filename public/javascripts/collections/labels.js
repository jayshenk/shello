var Labels = Backbone.Collection.extend({
  model: Label,
  url: '/labels',
  colors: ['#60bc45', '#f3d300', '#ffa941', '#ec5a44',
           '#c37be3', '#027bc1', '#01c3e1', '#4ee793',
           '#ff82d0', '#4d4d4d', '#b6bbbf']
});
