// Stuff to do when the document is ready
$(document).ready(function() {
    // Toggle subject
    $("#perfil1").click(function() { 
        var subjects = $("#perfil1-subjects");
        if (subjects.css("display") == "none")
            subjects.css("display", "block");
        else
            subjects.css("display", "none");
    });

    $("#perfil2").click(function() { 
        var subjects = $("#perfil2-subjects");
        if (subjects.css("display") == "none")
            subjects.css("display", "block");
        else
            subjects.css("display", "none");
    });
});