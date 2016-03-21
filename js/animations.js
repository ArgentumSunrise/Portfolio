var numClouds = 0;

function cloudRush() {

    var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    var limClouds = isMobile ? 4 : 8;
    var cloudSpeed = isMobile ? 150 : 250;
    var bottomLim = isMobile ? 250 : 350;
    var cloudTop = $('#front').position().top;
    var cloudHeight = $('#front').height();

    var clouds = setInterval(function () {
        spawnCloud();
        $(".cloud").animate({
            left: "+=" + cloudSpeed + "px"
        }, 3000, "linear");
        if (numClouds >= limClouds) {
            for (var x = 0; x < numClouds - limClouds; x++) {
                $('#cloud' + x).remove();
            }
        }
    }, 3000);

    function spawnCloud() {
        var top = cloudTop + 90 + Math.floor(Math.random() * (cloudHeight - bottomLim));
        $('#front').append("<img class='cloud' id='cloud" + numClouds + "' src='imgs/clouds/cloud" + (Math.floor(Math.random() * 8)).toString() + ".svg' style='top:" + top + "px'></object>");
        numClouds++;
    }
}