$(document).ready(function() {
    $(function () {
        $("#courses-button").click(function () {
            $('#courses-container').removeClass("tab").addClass("active");
            $('#profile-button').removeClass("pill active").addClass("pill");
            $('#courses-button').addClass("pill active");
        });

        $("#profile-button").click(function () {
            $('#courses-container').removeClass("active").addClass("tab");
            $('#courses-button').removeClass("pill active").addClass("pill");
            $('#profile-button').addClass("pill active");
        });
    });
});
