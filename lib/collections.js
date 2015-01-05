// Define Minimongo collections to match server/publish.js.

Anatomy = new Meteor.Collection("anatomy");
Anatomy.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});
