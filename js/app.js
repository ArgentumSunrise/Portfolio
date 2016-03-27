$(document).ready(function () {
    var page = location.search.substring(1, 2000);
    if (page) {
        $('#content').load('/pages/' + page + '.html');
    } else {
        $('#content').load('/pages/home.html');

    }

    $('.navitem').click(function () {
        id = this.id;
        console.log(this.id);
        $('#content').load('/pages/' + id + '.html', function () {
            $('#small-menu').slideUp();
            if (id != "home") {
                $('#hamburger').toggleClass('open').css('background-color', '#222');
                $('a').css('color', '#222');
            } else {
                $('a').css('color', '#fff');
                $('#hamburger').css('background-color', '#fff');
            }
        }).hide().fadeIn();
        window.history.pushState("string", "Title", "/?" + id);
    });
});