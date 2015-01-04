// Client-side JavaScript, bundled and sent to client.



// Workqueues session variables
Session.set('list_id', null);
Session.set('tag_filter', null);
Session.set('editing_addtag', null);
Session.set('editing_listname', null);
Session.set('editing_itemname', null);

// asset library session variables
Session.set('json_data', null);
Session.set('show_json_panel', false);
Session.set('selected_image_id', false);



// var TodosRouter = Backbone.Router.extend({
//     routes: {
//         ':list_id': 'main'
//     },
//     main: function (list_id) {
//         Session.set('list_id', list_id);
//         Session.set('tag_filter', null);
//     },
//     setList: function (list_id) {
//         this.navigate(list_id, true);
//     }
// });

// Router = new TodosRouter;





Router.configure({
  layoutTemplate: 'appLayout'
});



Router.route('/', {
  path: '/',
  name: 'libraryPage',
  template: 'libraryPage'
});
