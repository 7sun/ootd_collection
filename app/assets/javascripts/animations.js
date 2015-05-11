$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".sub-header").addClass("shadow");
        $("#main-container").css({paddingTop: "80px"});
        $(".header-container").css({ padding: "1em 0 0"});
    }
    else {
        $(".sub-header").removeClass("shadow");
        $("#main-container").css({paddingTop: "120px"});
        $(".header-container").css({ padding: "1em 0"});
    }
});