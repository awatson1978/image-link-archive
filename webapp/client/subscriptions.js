
// Always be subscribed to the todos for the selected list.
Tracker.autorun(function() {
  Meteor.subscribe('anatomy');
});
