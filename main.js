$(document).ready(function () {
    $('div.acc').click(function (event) {
        var target = $(event.target).parent();
        target.children(".acc-content").slideToggle(700);
    });
});