/*global $, jQuery, alert */
$(document).ready(function ()
{
    //nice scroll
    $("html").niceScroll({
        cursorcolor  : "#FBD73A",
        cursorborder : "1px solid #333333",
        cursorborderradius : "none"
    });

//      $('.carousel').carousel({
//        interval:5000 });
//

    //$(".header .intro h1").fitText();
    
    
    var scrollButton = $("#scroll-top");

    $(window).on("scroll",function ()
    {
        console.log( $(this).scrollTop() );

        if( $(this).scrollTop() >=700 ){
            scrollButton.show();
        }

        else{
            scrollButton.hide();
        }

    });



    scrollButton.on("click",function ()
    {
        $("html,body").animate({scrollTop : 0}, 600);
    });

});

/***********************************************/

$(window).on("load",function ()
{

    $("body").css("overflow","auto");
    $(".loading-overlay").fadeOut(7000);

});