Template.registerHelper("getPreviewImage", function(argument){
  if(Session.get("selectedImage")){
    return Session.get("selectedImage").image;
    // return 'images/grays.anatomy.tiles/' + Session.get("anchorImage") + '.png'
  }else{
    return "images/placeholder-640x480.png";
  }
});
