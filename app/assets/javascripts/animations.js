$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".sub-header").addClass("shadow");
    }
    else {
        $(".sub-header").removeClass("shadow");
    }
});