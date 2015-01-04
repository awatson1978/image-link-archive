// Subscribe to 'lists' collection on startup.
// Select a list once data has arrived.
Meteor.subscribe('lists', Session.get('list_id'));

Meteor.subscribe('anatomy');

// Always be subscribed to the todos for the selected list.
Tracker.autorun(function() {
  Meteor.subscribe('anatomy');
  if (Session.get('list_id'))
    Meteor.subscribe('todos', Session.get('list_id'));
});
