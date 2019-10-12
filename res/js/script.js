$(document).ready(function() {
	var user = new User(
	"John",
	"Doe",
	"11/10/1990",
	"Software Engineering",
	"2.75"
	)
	var courses = [];
	var course1 = new Course(
	"Agile software development",
	"1",
	"82",
	)
	var course2 = new Course(
	"System modeling",
	"1",
	"85"
	)
	var course3 = new Course(
	"Object-oriented programming",
	"2",
	"99"
	)
	var course4 = new Course(
	"Estonian language level A2",
	"2",
	"65"
	)
	courses[0] = course1;
	courses[1] = course2;
	courses[2] = course3;
	courses[3] = course4;
    $(function () {
        //Make "Profile " and "Courses" buttons clickable so that they show/hide corresponding containers
        //Courses
        $("#courses-button").click(function () {
			//Initialize courses table
			for(var i = 0;i<courses.length;i++){
				//$("#courses-container courses")."<td>"+(i+1).toString()+"</td>";
				$("#courses-container courses")."<td>"courses[i].title+"</td>";
				$("#courses-container courses")."<td>"courses[i].semester+"</td>";
				$("#courses-container courses")."<td>"courses[i].grade    +"</td>";
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
