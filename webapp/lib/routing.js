
Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/imageLibrary', {
  path: '/',
  name: 'imageLibrary',
  template: 'imageLibrary'
});




Router.route('myLibraryPage', {
  path: '/mylibrary',
  name: 'myLibraryPage',
  template: 'myLibraryPage'
});
