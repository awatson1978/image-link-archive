// Define Minimongo collections to match server/publish.js.

Lists = new Meteor.Collection("lists");
Todos = new Meteor.Collection("todos");

//Assets = new Meteor.Collection("assets");
//Assets.allow({
//    insert: function(){
//        return true;
//    },
//    update: function () {
//        return true;
//    },
//    remove: function(){
//        return true;
//    }
//});
//
//Datasets = new Meteor.Collection("datasets");
//Datasets.allow({
//    insert: function(){
//        return true;
//    },
//    update: function () {
//        return true;
//    },
//    remove: function(){
//        return true;
//    }
//});


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
