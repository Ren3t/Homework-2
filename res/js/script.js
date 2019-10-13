$(document).ready(function() {
	var user = new User(
	"John",
	"Doe",
	"11/10/1990",
	"Software Engineering",
	"2.75"
	)
	var courses = [
		new Course("Agile software development", "1", "82"),
		new Course("System modeling", "1", "85"),
		new Course("Object-oriented programming", "2", "99"),
		new Course("Estonian language level A2", "2", "65"),
	];
    $(function () {
        //Make "Profile " and "Courses" buttons clickable so that they show/hide corresponding containers
        //Courses
		courses2 = document.getElementsByClassName("courses");
        $("#courses-button").click(function() {
			//Initialize courses table
			for(var i = 0;i<courses2.length;i++){
				courses2[i].className = courses2[i].className.replace("active", "");

			}
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
