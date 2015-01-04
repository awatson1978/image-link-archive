hidePages = function(){
    $('.page').addClass('hidden');
}

showPage = function(page){
    hidePages();
    $(page).removeClass('hidden');
    Session.set('current_page', page);
    parseBreadCrumbs(page);
}
showCurrentSessionPage = function(){
    showPage(Session.get('current_page'));
}
