Template.imageAssetsGrid.helpers({
  image_assets: function(){
    return Anatomy.find({'image': { $regex: Session.get('imageNameFilter'), $options: 'i' } });
  },
  anatomy_image: function(){
    return this.image;
  }
});
