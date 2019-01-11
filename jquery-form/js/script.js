$(document).ready(function () {
    $("#send").click(function () {
        event.preventDefault();
        // variables
        var pseudo = $("#pseudo").val();
        var pass = $("#pass").val();
        var passConfirm = $("#pass-confirm").val();
        var email = $("#email").val();
        // //checks
        if (pseudo == '') {
            alert("Input can not be left blank");
            $("#pseudo").css({
                "border-color": "Red",
                "border-style": "solid"
            });
        } else if (pseudo.length > 1 && pseudo.length < 5) {
            alert('Bijnaam moet langer zijn dan 5 characters');
            $("#pseudo").css("border-color", "red");
        } else {
            $("#pseudo").css("border-color", "Green");
        }

        if (pass == ' ') {
            alert("Input can not be left blank");
            $("#pass").css({"border-color": "Red","border-style": "solid"})
            ;
        
        } else if (pass.length > 1 && pass.length < 5) {
            alert("passwoord moet langer zijn dan 5 characters");
        } else {
            $("#pass").css("border-color", "Green");
        }


        if (passConfirm != pass) {
            alert("passwoorden matchen niet!");
            $("#pass-confirm").css("border-color", "Red");
        }
        else{
            $("#pass-confirm").css("border-color", "Green");
        }
        if (email == ' ') {
            alert("Input can not be left blank");
            $("#pass").css({
                "border-color": "Red",
                "border-style": "solid"
            });
        } else if (email.length > 1 && email.length <= 5) {
            alert("email moet langer zijn dan 5 characters");
        } else {
            $("#email").css("border-color", "Green");

        };
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        console.log(pattern.test(email));

    });
});