Template.headerNavbar.events({
  'keyup #librarySearchInput': function (evt, tmpl) {
    Session.set('imageNameFilter', $('#librarySearchInput').val());
  }
});
