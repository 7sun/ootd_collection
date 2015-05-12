$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".sub-header").addClass("shadow");
        $("#main-container").css({
            'paddingTop' : "86px"
        });
        $(".header-container").css({
            'padding' : "1em 0 0"
        });
        // $(".site-nav").fadeOut();
    }
    else {
        $(".sub-header").removeClass("shadow");
        $("#main-container").css({
            'paddingTop': "120px"
        })

        // .css({paddingTop: "120px"});
        $(".header-container").css({
            'padding' : "1em 0"
        });
        // $(".site-nav").fadeIn();
        // console.log("show menu");
    }
});