$(document).ready(function () {
    var fpaths = document.querySelectorAll('*[id^="fpath"]'),
        spaths = document.querySelectorAll('*[id^="path"]'),
        logo = document.querySelectorAll('*[id^="logopath"]'),
        lengths = new Array(),
        pages = ["front", "info", "skills", "process", "resume"];

    $('#lines').hide().fadeIn(500);

    prepPaths(fpaths);
    prepPaths(spaths);
    prepPaths(logo);
    setTimeout(function () {
        draw(fpaths, 3);
        setTimeout(function () {
            draw(spaths, 1.5)
        }, 1500);
        setTimeout(function () {
            draw(logo, 3)
        }, 2500);
    }, 500);

    function prepPaths(paths) {
        lengths = [];
        for (var i = 0; i < paths.length; i++) {
            l = paths[i].getTotalLength();
            lengths[i] = l;
            paths[i].style.strokeDasharray = paths[i].getTotalLength() + ' ' + paths[i].getTotalLength();
            paths[i].style.strokeDashoffset = paths[i].getTotalLength();
            paths[i].style.transition = paths[i].style.WebkitTransition =
                'none';
        }
    }

    function draw(paths, n) {
        for (var j = 0; j < paths.length; j++) {
            paths[j].style.transition = paths[j].style.WebkitTransition =
                'stroke-dashoffset ' + n + 's ease-in-out';
            paths[j].style.strokeDashoffset = '0';
        }
    }

    $('.sidebar .node').mouseenter(function () {
        $(this).parent().children('a').fadeTo(100, 1);
    }).mouseleave(function () {
        $(this).parent().children('a').fadeTo(100, 0);
    });

    $('.node').click(function (event) {
        var id = $(this).attr('id');
        var target = $("#" + id + "-sec");
        if (target.length) {
            event.preventDefault();
            top.location.href = '#' + target.attr('id');
        }
    });

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(function () {
            setTimeout(function () {
                $('#lines h1').fadeTo('slow', 1);
            }, 5500);
        });
    }
});