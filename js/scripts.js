$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $("#carouselbutton").click(function () {
        if ($("#carouselbutton").children("i").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselbutton").children("i").removeClass('fa-pause');
            $("#carouselbutton").children("i").addClass('fa-play');
        }
        else if ($("#carouselbutton").children("i").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselbutton").children("i").removeClass('fa-play');
            $("#carouselbutton").children("i").addClass('fa-pause');
        }
    });
    $('#log_in').click(function () {
        $('#loginModal').modal('toggle')
    });
    $('#reservetable').click(function () {
        $('#reserveModal').modal('toggle')
    });
});