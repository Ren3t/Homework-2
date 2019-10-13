$(document).ready(function() {
	function calcGPA(){
		var points = 0;
		for(var i = 0;i<courses.length;i++){
			if(courses[i].grade >90){
				points += 4;
			}
			else if(courses[i].grade >80){
				points += 3;
			}
			else if(courses[i].grade >70){
				points += 2;
			}
			else if(courses[i].grade >60){
				points += 1;
			}
			else if(courses[i].grade >50){
				points += 0.5;
			}
			else{
				points += 0;
			}
		}
	var gpa = points/courses.length;
	return gpa
	}
	var courses = [
		new Course("Agile software development", "1", "82"),
		new Course("System modeling", "1", "85"),
		new Course("Object-oriented programming", "2", "99"),
		new Course("Estonian language level A2", "2", "65"),
	];
	var user = new User(
	"John",
	"Doe",
	"11/10/1990",
	"Software Engineering",
	calcGPA()
	)
	$("#gpa").append("<strong>"+user.gpa+"</strong>");
    $(function () {
        //Make "Profile " and "Courses" buttons clickable so that they show/hide corresponding containers.
        //Courses
				function tableInit() {
					//Initialize courses table
					$("#courses > tbody>").remove();
					for(var i = 0;i<courses.length;i++){
						var first = (i+1).toString();
						$("#courses > tbody:last-child").append("<tr><td>"+first+"</td><td>"+courses[i].title+"</td><td>"+courses[i].semester+"</td><td>"+courses[i].grade+"</td></tr>");
					}
						$('#profile-container').removeClass("tab active").addClass("tab");
            $('#courses-container').removeClass("tab").addClass("active");
            $('#profile-button').removeClass("pill active").addClass("pill");
            $('#courses-button').addClass("pill active");
        }
        $("#courses-button").click(tableInit);
        //Profile
        $("#profile-button").click(function () {
						$('#profile-container').removeClass("tab").addClass("tab active");
            $('#courses-container').removeClass("active").addClass("tab");
            $('#courses-button').removeClass("pill active").addClass("pill");
            $('#profile-button').addClass("pill active");
        });

        //Make "+"  button clickable so that it shows/hides form to add new course.
        $("#add-course-button").click(function () {
					$(':input','#add-course')
						.val('');
          $('#add-course').toggle()

        });
		//When clicking on "Cancel" button, in the form,
		//entered information should disappear and form should be hidden.
		$('#cancel-course').click(function(){
			$(':input','#add-course')
				.val('');
			$('#add-course').hide();
		});
		$('#save-course').click(function () {
				courses.push(new Course($("#title").val(),$("#semester").val(),$("#grade").val()));
				$("#courses-button").trigger("click");
				$("#gpa>").remove();
				user.gpa=calcGPA();
				$("#gpa").append("<strong>"+user.gpa+"</strong>");
				$('#add-course').toggle()


        })
    });
});
