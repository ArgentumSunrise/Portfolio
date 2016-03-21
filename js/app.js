var atHome = true;

$(document).ready(function () {
    var page = location.search.substring(1, 2000);
    if (page) {
        $('#content').load('/pages/' + page + '.html');
    } else {
        $('#content').load('/pages/home.html', function () {
            cloudRush();
        });
    }

    $('#nav').find('.navitem').click(function () {
        id = this.id;
        console.log(this.id);
        $('#content').load('/pages/' + id + '.html', function () {
            atHome ? cloudRush() : false;
        }).hide().fadeIn();
        window.history.pushState("string", "Title", "/?" + id);
    });
});