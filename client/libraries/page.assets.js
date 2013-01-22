Template.assetsPageTemplate.rendered = function (){

    setSidebarPanelHeight();
//    var anatomyList = new List('snomed-anatomy-list', {
//        // specify the element classes we want to sort our list by
//        valueNames: [ 'anatomy-name' ]
//    });
    $(window).resize(function(){
        setSidebarPanelHeight();
    });
};
function setSidebarPanelHeight() {
    $('#anatomySearchPanel').css('height', window.innerHeight - 120);
    $('#anatomyAdminPanel').css('height', window.innerHeight - 120);
};

Template.assetsPageTemplate.snomed_reference = function () {
    log_event('Template.snomedPageTemplate.snomed_reference', LogLevel.Trace);
    //return Anatomy.find();
    return Anatomy.find({'image': { $regex: Session.get('image_name_filter'), $options: 'i' } });
};
Template.assetsPageTemplate.snomed_count = function () {
    log_event('Template.snomedPageTemplate.snomed_count: ' + Anatomy.find().count(), LogLevel.Trace);
    return Anatomy.find().count();
};
Template.assetsPageTemplate.selected_image = function(){
    if(Session.get("selecting_anatomy")){
        return Session.get("selecting_anatomy");
    }else{
        return "/images/placeholder-240x240.gif";
    }
};

Template.assetsPageTemplate.events({
    'keypress input': function (evt, tmpl) {
        Session.set('image_name_filter', $('#filterInput').val());
        Meteor.flush();
    },
    'click .anatomy-item': function (evt, tmpl) {
        Session.set("anchor_image", this.image);

        //alert(JSON.stringify(this));
        //Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }});
    }
});

Template.anatomyItemTemplate.anatomy_image = function () {
    //log_event('Template.anatomyItemTemplate.anatomy_image', LogLevel.Trace);
    return this.image;
    //return 'bar';
};
Template.assetsSideBarTemplate.selected_image = function () {
    //log_event('Template.anatomyItemTemplate.anatomy_image', LogLevel.Trace);
    if(Session.get("anchor_image")){
        return Session.get("anchor_image");
    }else{
        return "/images/placeholder-240x240.gif";
    }
};