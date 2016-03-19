
// Router.configure({
//   layoutTemplate: 'mainLayout'
// });


Router.configure({
  // we use the  appLayout template to define the layout for the entire app
  layoutTemplate: 'appLayout',

  // the pageNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'pageNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'sidebar': {
      to: 'westPanel'
    },
    'globalSearchBar': {
      to: 'globalInput'
    },
    'deleteImageModal': {
      to: 'modalA'
    },
    'upsertImageModal': {
      to: 'modalB'
    },
    'previewImageModal': {
      to: 'modalC'
    },
    'librarySearch': {
      to: 'globalInput'      
    }
  }
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
