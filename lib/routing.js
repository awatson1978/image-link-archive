
Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('/libraryPage', {
  path: '/',
  name: 'libraryPage',
  template: 'libraryPage'
});
