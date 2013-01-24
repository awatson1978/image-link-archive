Template.imageAssetsGrid.image_assets = function(){
    //return Anatomy.find();
    return Anatomy.find({'image': { $regex: Session.get('image_name_filter'), $options: 'i' } });
};
Template.imageAssetGridItemTemplate.anatomy_image = function () {
    return this.image;
};
Template.libraryPageTemplate.events({
    'keypress input': function (evt, tmpl) {
        Session.set('image_name_filter', $('#librarySearchInput').val());
        Meteor.flush();
    },
    'click .anatomy-item': function (evt, tmpl) {
        Session.set("anchor_image", this.image);
        //Session.set("show_json_panel", true);
        Session.set("selected_image_id", this._id);
        Session.set("json_data", JSON.stringify(this));
    }
});
Template.assetsDisplayTemplate.selected_image = function () {
    if(Session.get("anchor_image")){
        var url = Session.get("anchor_image");
        return url.substring(url.lastIndexOf('/')+1);
    }else{
        return "400x300image.gif";
    }

};

Template.imageAssetInfoTemplate.anatomy_image = function () {
    if(Session.get("anchor_image")){
        return Session.get("anchor_image");
    }else{
        return "/images/placeholder-240x240.gif";
    }
};
Template.imageAssetInfoTemplate.asset_id = function () {
    if(Session.get("selected_image_id")){
        return Session.get("selected_image_id");
    }else{
        return "no id availablef";
    }
};
Template.imageAssetInfoTemplate.asset_name = function () {
    if(Session.get("asset_id")){
        return Session.get("asset_id");
    }else{
        return "no id availablef";
    }
};
Template.imageAssetInfoTemplate.asset_filename = function () {
    if(Session.get("anchor_image")){
        var url = Session.get("anchor_image");
        return url.substring(url.lastIndexOf('/')+1);
    }else{
        return "no anchor image specified";
    }
};
Template.imageAssetInfoTemplate.asset_project_id = function () {
    return "null";
};
Template.imageAssetInfoTemplate.asset_description = function () {
    return "lorem ipsum...";
};