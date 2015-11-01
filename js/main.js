function Site(name, url, desc, img) {
    this.name = name;
    this.url = url;
    this.desc = desc;
    this.img = img;
}

var ind = 0;
var pages = ['about', 'web', 'design', 'contact'];
var sites = [
        new Site("Forecastr", "http://argentumsunrise.github.io/forecastr/#/", "A simple weather app powered by simpleweather.js.", 'url(imgs/forecastr.png)'),
        new Site("Elemental", "http://argentumsunrise.github.io/elemental/#/", "A web-savvy periodic table.", 'url(imgs/elemental.png)'),
        new Site("HelpforHaiti", "http://helpforhaiti.tk", "A project to help the less fortunate in Haiti.", "url(imgs/helpforhaiti.png)")
    ];

$(document).ready(function () {

    carousel();

    $('.nav-p').click(function (event) {
        var id = $(this).parent().attr('id');
        var target = $("#" + id + "-page");
        if (target.length) {
            event.preventDefault();
            scrolling(target, pages.indexOf(id));
        }
    });

    $(window).scroll(function () {
        var offset = window.pageYOffset;
        var height = window.innerHeight;
        $('#pb1').css('margin-top', (offset / 2) + 'px');
        $('#pb2').css('margin-top', ((offset / 2) - height) + 'px');
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

    $('#web-page a').mouseenter(function () {
        $(this).toggleClass("active");
    });

    $('#web-page a').mouseleave(function () {
        $(this).toggleClass("active");
    });

    $('#arrow-left').click(function () {
        ind--;
        carousel();
    })
    $('#arrow-right').click(function () {
        ind++;
        carousel();
    })
})

function scrolling(target, index) {
    var time = 700 + index * 700;
    $('html, body').animate({
        scrollTop: target.offset().top,
    }, time).css("overflow-y", "scroll");
    console.log(time)
}

function carousel() {
    ind %= sites.length;
    ind == -1 ? ind = 2 : false;
    var obj = sites[ind];
    $('#carousel-ctr').fadeOut(300);
    setTimeout(function () {
        $('#carousel').css('background-image', obj.img)
        $('#web-page a').attr("href", obj.url).html(obj.name);
        $('#car-p').html(obj.desc);
        $('#carousel-ctr').fadeIn(300);
    }, 500);
}