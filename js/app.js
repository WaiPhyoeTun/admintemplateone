//jQuery Area

$(document).ready(function(){

    $('.sidebarlinks').click(function(){
        //sidebarlinks all ko remove
        $('.sidebarlinks').removeClass('currents');
        //click lote tel sidebarlink ko add
        $(this).addClass('currents');
    });

});

//Javascript Area