Meteor.publish('anatomy', function() {
  return Anatomy.find();
});
