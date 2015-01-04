//---------------------------------------------------------

Template.footerNavbar.helpers({
  show_json_panel: function(){
    return Session.get('show_json_panel');
  },
  asset_json: function () {
    return Session.get('json_data');
  }
});




//---------------------------------------------------------

toggleJsonPanel = function(){
    if(Session.get('show_json_panel')){
        Session.set('show_json_panel', false);
    }else{
        Session.set('show_json_panel', true);
    }
}
