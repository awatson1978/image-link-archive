Session.setDefault('imageNameFilter', '');


Template.imageLibrary.events({
  'click .anatomy-item': function (evt, tmpl) {
    Session.set("selectedImage", this);
    Session.set("selectedImageId", this._id);
    $('#previewImageModal').modal("show");
  }
});
