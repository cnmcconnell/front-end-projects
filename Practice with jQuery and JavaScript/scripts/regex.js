"use strict";
$(document).ready(function() {


  //  $("#phone").val( "123-456-7890" );  // set default phone number
//    $("#phone").focus(); // set focus on initial load


    $( "#validate" ).click(function() {
        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag

        var email = $("#email").val();
        var phone = $("#phone").val();

        if ( email === "" ||
                ! /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email) )
        {
            isValid = false;
            $( "#email" ).next().text("Please enter a valid email.");
        }
        if ( phone === "" || ! /^(\d{1}(-|.))?(\()?\d{3}(\))?(-|.)\d{3}(-|.)\d{4}$/.test(phone) ) {
            isValid = false;
            $( "#phone" ).next().text(
                "Please enter a phone number in NNN-NNN-NNNN format.");
        }


        if ( isValid ) {
            $("#validate").next().text("Form is valid"); // code that saves profile info goes here
        }

    });

    // set focus on initial load

});
