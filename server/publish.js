// Lists -- {name: String}
//Lists = new Meteor.Collection("lists");
//Todos = new Meteor.Collection("todos");


// Publish complete set of lists to all clients.
Meteor.publish('lists', function () {
  return Lists.find();
});
Meteor.publish('anatomy', function () {
    return Anatomy.find();
});

// Todos -- {text: String,
//           done: Boolean,
//           tags: [String, ...],
//           list_id: String,
//           timestamp: Number}


// Publish all items for requested list_id.
Meteor.publish('todos', function (list_id) {
  return Todos.find({list_id: list_id});
});

