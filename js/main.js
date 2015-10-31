$(document).ready(function () {

    $('.nav-p').click(function (event) {
        var target = $("#" + $(this).parent().attr('id') + "-page");
        if (target.length) {
            event.preventDefault();
            scrolling(target);
        }
    });

    $('.arrow').click(function (event) {
        event.preventDefault();
        scrolling($('#about-page'))
    });

    $('.nav-item').mouseenter(function () {
        $(this).children('.nav-unselected-ctr').css(
            "transform", "rotateX(90deg)"
        );
        $(this).children('.nav-selected-ctr').css(
            "transform", "rotateX(0deg)"
        );
    });
    $('.nav-item').mouseleave(function () {
        $(this).children('.nav-unselected-ctr').css(
            "transform", "rotateX(0deg)"
        );
        $(this).children('.nav-selected-ctr').css(
            "transform", "rotateX(90deg)"
        );
    });

})

function scrolling(target) {
    $('html, body').animate({
        scrollTop: target.offset().top,
    }, 700).css("overflow-y", "scroll");
}