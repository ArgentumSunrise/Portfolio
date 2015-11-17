function Site(name, url, desc, img) {
    this.name = name;
    this.url = url;
    this.desc = desc;
    this.img = img;
}

var ind = 0;
var started = false;
var pages = ['about', 'web', 'design', 'contact'];
var sites = [
        new Site("Forecastr", "http://argentumsunrise.github.io/forecastr/#/", "A simple weather app powered by simpleweather.js.", 'url(imgs/forecastr.png)'),
        new Site("Elemental", "http://argentumsunrise.github.io/elemental/#/", "A web-savvy periodic table.", 'url(imgs/elemental.png)'),
        new Site("HelpforHaiti", "http://helpforhaiti.tk", "A project to help the less fortunate in Haiti.", "url(imgs/helpforhaiti.png)")
    ];

$(document).ready(function () {

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

    $('#carousel-ctr a').mouseenter(function () {
        shadowToggle(false, $(this))
    })

    $('#carousel-ctr a').mouseleave(function () {
        shadowToggle(false, $(this))
    })

    $('#car-start').mouseenter(function () {
        shadowToggle(true, $(this))
    })

    $('#car-start').mouseleave(function () {
        shadowToggle(true, $(this))
    })

    $('#car-start').click(function () {
        $(this).fadeOut(300);
        $('.dir-arrow').fadeIn(300);
        carousel();
        started = true;
    })

    $('#arrow-left').click(function () {
        if (started) {
            ind--;
            carousel();
        }
    })
    $('#arrow-right').click(function () {
        if (started) {
            ind++;
            carousel();
        }
    })
})

function scrolling(target, index) {
    var time = 700 * Math.sqrt(index + 1)
    $('html, body').animate({
        scrollTop: target.offset().top,
    }, time).css("overflow-y", "scroll");
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

function shadowToggle(isButton, subject) {
    var x = (isButton ? "button" : "txt");
    subject.toggleClass(x + "-active");
}