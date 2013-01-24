// if the database is empty on server start, create some sample data.

//Meteor.startup(function () {
//    if (Assets.find().count() === 0) {
//        var data = "";
//        //var assets = require('./datasets/library_assets');
//        //console.log(JSON.stringify(assets));
//
//        var fs = require('fs');
//        var file = 'library_assets.json';
//
//        fs.readFile(file, 'utf8', function (err, data) {
//            if (err) {
//                console.log('Error: ' + err);
//                return;
//            }
//
//            data = JSON.parse(data);
//
//            console.log(data);
//        });
//
//
//        for (var i = 0; i < data.length; i++) {
//            Assets.insert({
//                name:   data[i].name,
//                image:  data[i].image
//            });
//        }
//    }
//});
