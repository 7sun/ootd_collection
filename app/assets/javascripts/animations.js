$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".sub-header").addClass("shadow");
        // $("#main-container").animate({
        //     'paddingTop' : "80px"
        // });
        // $(".header-container").animate({
        //     'padding' : "1em 0 0"
        // });
        // $(".site-nav").fadeOut();
    }
    else {
        $(".sub-header").removeClass("shadow");
        // $("#main-container").animate({
        //     'paddingTop': "120px"
        // })

        // // .css({paddingTop: "120px"});
        // $(".header-container").animate({
        //     'padding' : "1em 0"
        // });
        // $(".site-nav").fadeIn();
        // console.log("show menu");
    }
});