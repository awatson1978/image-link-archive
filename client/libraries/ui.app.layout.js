//---------------------------------------------------------

Template.footerBarTemplate.show_json_panel = function(){
    return Session.get('show_json_panel');
};
Template.footerBarTemplate.asset_json = function(){
    return Session.get('json_data');
};


//---------------------------------------------------------

function toggleJsonPanel(){
    if(Session.get('show_json_panel')){
        Session.set('show_json_panel', false);
    }else{
        Session.set('show_json_panel', true);
    }
}