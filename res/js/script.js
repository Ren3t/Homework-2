$(document).ready(function() {
    $(function () {
        //Make "Profile " and "Courses" buttons clickable so that they show/hide corresponding containers
        //Courses
        $("#courses-button").click(function () {
            $('#courses-container').removeClass("tab").addClass("active");
            $('#profile-button').removeClass("pill active").addClass("pill");
            $('#courses-button').addClass("pill active");
        });
        //Profile
        $("#profile-button").click(function () {
            $('#courses-container').removeClass("active").addClass("tab");
            $('#courses-button').removeClass("pill active").addClass("pill");
            $('#profile-button').addClass("pill active");
        });

        //Make "+"  button clickable so that it shows/hides form to add new course
        $("#add-course-button").click(function () {
            $('#add-course').toggle()
        });
    });


});
