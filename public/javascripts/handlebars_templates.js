this["JST"] = this["JST"] || {};

this["JST"]["addList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"add-list\">Add a list...</a>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><div id=\"search\"><input type=\"text\" /><i class=\"fa fa-search fa-flip-horizontal\" aria-hidden=\"true\"></i><a href=\"#\" class=\"close\"></a></div><div class=\"heading\"><h1>Shello</h1></div><div class=\"notifications\"><a href=\"#\" class=\"fa fa-bell-o notifications\" aria-hidden=\"true\"></a></div></header><main><header><h2>Board</h2></header><div class=\"container\"><ul id=\"lists\"></ul></div></main>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span style=\"background-color:"
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)))
    + ";\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p><i class=\"fa fa-pencil\"></i>";
},"useData":true});

this["JST"]["cardDescription"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<dl><dt>Description<a href=\"#\" class=\"edit\">Edit</a></dt><dd>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</dd></dl>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"edit\">Edit the description...</a><dl><dt></dt><dd></dd></dl>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["cardDetail"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal\"><header><input type=\"text\" id=\"title\" value=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" /><p>in list <a href=\"#\" class=\"move\">"
    + alias1(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"listName","hash":{},"data":data}) : helper)))
    + "</a><a href=\"#\" class=\"close\"></a></header><div class=\"col details\"><section id=\"card-labels\"></section><section id=\"card-due-date\"></section><section id=\"description\"></section><section id=\"comments\"></section></div><div class=\"col actions\"><section><h2>Add</h2><ul><li><a href=\"#\" class=\"labels\"><i class=\"fa fa-tag\" aria-hidden=\"true\"></i>Labels</a></li><li><a href=\"#\" class=\"due-date\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Due Date</a></li></ul></section><section><h2>Actions</h2><ul><li><a href=\"#\" class=\"move\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>Move</a></li><li><a href=\"#\" class=\"copy\"><i class=\"fa fa-clone\" aria-hidden=\"true\"></i>Copy</a></li><li><a href=\"#\" class=\"subscribe"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Subscribe<i class=\"fa fa-check-square\" aria-hidden=\"true\"></i></a></li><li><a href=\"#\" class=\"delete-card\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i>Delete</a></li></ul></section></div></div>";
},"useData":true});

this["JST"]["cardDueDate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>Due Date</h3><a href=\"#\" class=\"due-date\">"
    + container.escapeExpression(((helper = (helper = helpers.dueDate || (depth0 != null ? depth0.dueDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data}) : helper)))
    + "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["cardLabels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Labels</h3><div><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><i class=\"fa fa-plus\"></i></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li style=\"background-color:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + ";\"><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>User</h3><p>"
    + container.escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});

this["JST"]["comments"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"#\" method=\"post\"><dl><dt><label>Add Comment</label></dt><dd><textarea placeholder=\"Write a comment...\"></textarea></dd></dl><button type=\"submit\" disabled>Save</button></form><h2>Activity</h2><ul></ul>";
},"useData":true});

this["JST"]["copyCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"actions-modal\"><header><h1>Copy Card</h1><a class=\"close\"></a></header><form action=\"#\" method=\"post\"><fieldset><div class=\"select-container\"><label for=\"list\">List</label><select id=\"list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"select-container\"><label for=\"position\">Position</label><select id=\"position\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><button type=\"submit\">Create Card</button></fieldset></form></div>";
},"useData":true});

this["JST"]["deleteCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"actions-modal\"><header><h1>Delete Card?</h1><a class=\"close\"></a></header><p>Are you sure you want to delete this card?</p><button class=\"delete\">Delete</button></div>";
},"useData":true});

this["JST"]["deleteLabel"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"actions-modal\"><header><a class=\"fa fa-arrow-left\"></a><h1>Delete Label?</h1><a class=\"close\"></a></header><p>There is no undo. This will remove this label from all cards.</p><button class=\"delete\">Delete</button></div>";
},"useData":true});

this["JST"]["dueDate"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"actions-modal\"><header><h1>Change Due Date</h1><a class=\"close\"></a></header><form action=\"#\" method=\"post\"><fieldset><dl><dt><label for=\"datepicker\">Date</label></dt><dd><input type=\"text\" id=\"datepicker\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.dueDate || (depth0 != null ? depth0.dueDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data}) : helper)))
    + "\"/></dd></dl><div id=\"calendar\"></div><button type=\"submit\">Save</button><button class=\"delete\">Remove</button></fieldset></form></div>";
},"useData":true});

this["JST"]["editCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<fieldset><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><button type=\"submit\">Save</button></fieldset>";
},"useData":true});

this["JST"]["editDescription"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form action=\"#\" method=\"post\"><textarea placeholder=\"Add a more detailed description...\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea><button type=\"submit\">Save</button><a href=\"#\" class=\"close\"></a></form>";
},"useData":true});

this["JST"]["editLabel"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"label\" data-color=\""
    + alias2(alias1(depth0, depth0))
    + "\" style=\"background-color:"
    + alias2(alias1(depth0, depth0))
    + ";\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"actions-modal\"><header><a class=\"fa fa-arrow-left\"></a><h1>Change Label</h1><a class=\"close\"></a></header><form action=\"#\" method=\"post\"><fieldset><dl><dt><label for=\"name\">Name</label></dt><dd><input id=\"name\" type=\"text\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></input></dd><dt><label>Select a color</label></dt><dd><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<li><dl><dt>No color.</dt><dd>This won't show up on the front of cards.</dd></dl></li></ul></dd></dl><button type=\"submit\">Save</button><button class=\"delete\">Delete</button></fieldset></form></div>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"label\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div style=\"background-color:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + ";\"><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p><i class=\"fa fa-check\" aria-hidden=\"true\"></i></div><i class=\"fa fa-pencil\"></i></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"actions-modal\"><header><h1>Labels</h1><a class=\"close\"></a></header><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a href=\"#\" class=\"new-label\">Create a new label</a></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header><h3>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3></header><div class=\"cards-container\"></div><a href=\"#\" class=\"add-card\">Add a card...</a>";
},"useData":true});

this["JST"]["moveCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"actions-modal\"><header><h1>Move Card</h1><a class=\"close\"></a></header><form action=\"#\" method=\"post\"><fieldset><div class=\"select-container\"><label for=\"list\">List</label><select id=\"list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"select-container\"><label for=\"position\">Position</label><select id=\"position\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><button type=\"submit\">Move</button></fieldset></form></div>";
},"useData":true});

this["JST"]["newCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<fieldset><textarea id=\"title\"></textarea><button type=\"submit\">Add</button><a href=\"#\" class=\"close\"></a></fieldset>";
},"useData":true});

this["JST"]["newLabel"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"label\" data-color=\""
    + alias2(alias1(depth0, depth0))
    + "\" style=\"background-color:"
    + alias2(alias1(depth0, depth0))
    + ";\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"actions-modal\"><header><a class=\"fa fa-arrow-left\"></a><h1>Create Label</h1><a class=\"close\"></a></header><form action=\"#\" method=\"post\"><fieldset><dl><dt><label for=\"name\">Name</label></dt><dd><input id=\"name\" type=\"text\"></input></dd><dt><label>Select a color</label></dt><dd><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<li><dl><dt>No color.</dt><dd>This won't show up on the front of cards.</dd></dl></li></ul></dd></dl><button type=\"submit\">Create</button></fieldset></form></div>";
},"useData":true});

this["JST"]["newList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<fieldset><input id=\"name\" type=\"text\" placeholder=\"Add a list...\" /><button type=\"submit\">Save</button><a href=\"#\" class=\"close\"></a></fieldset>";
},"useData":true});

this["JST"]["notifications"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.notifications : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>No Notifications</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal\"><header><h1>Notifications</h1><a href=\"#\" class=\"close\"></a></header>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.notifications : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["positions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["searchCards"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-list-id=\""
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "\" class=\"card\"><p>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["searchResults"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"results\"><h1>Cards</h1><ul id=\"search-cards\"></ul></section>";
},"useData":true});