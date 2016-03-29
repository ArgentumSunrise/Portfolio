$(document).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('#hamburger').show();
        $('#nav-right').hide();
    }
    $(document).ready(function () {
        $('#hamburger').click(function () {
            $(this).toggleClass('open');
            $('#small-menu').slideToggle(300);
        });
    });

    var page = location.search.substring(1, 2000);
    if (page) {
        $('#content').load('../pages/' + page + '.html');
    } else {
        $('#content').load('../pages/home.html');
    }

    $('.navitem').click(function () {
        id = this.id;
        console.log(this.id);
        $('#content').load('/pages/' + id + '.html', function () {
            $('#small-menu').slideUp();
            if (id != "home") {
                $('#hamburger').toggleClass('open').children('span').css('background-color', '#222');
                $('#nav a').css('color', '#222');
            } else {
                $('#nav a').css('color', '#fff');
                $('#hamburger span').css('background-color', '#fff');
            }
        }).hide().fadeIn();
        window.history.pushState("string", "Title", "/?" + id);
    });
});