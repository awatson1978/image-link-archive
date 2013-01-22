function hidePages(){
    $('.page').addClass('hidden');
}

function showPage(page){
    hidePages();
    $(page).removeClass('hidden');
    Session.set('current_page', page);
    parseBreadCrumbs(page);
}
function showCurrentSessionPage(){
    showPage(Session.get('current_page'));
}

function parseBreadCrumbs(){
}