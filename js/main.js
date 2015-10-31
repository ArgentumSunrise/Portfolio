$(document).ready(function () {
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

    $('.nav-p').click(function (event) {
        var target = "#" + $(this).parent().attr('id') + "-page";
        if (target.length) {
            event.preventDefault();
            console.log(target)
            $(window).animate({
                scrollTop: 600
            }, 1500);
            console.log($(target).offset().top)
        }
    });
})