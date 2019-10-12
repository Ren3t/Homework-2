$( function() {
    $( "#courses-button" ).click( function() {
        $('#courses-container').removeClass("tab").addClass("active");
        $('.pill.active').removeClass("pill active").add("pill");
        $('.pill').addClass("pill active");
    } );
});
