$("document").ready(function () {
    $("#send").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        var testName = function(name){return !/[a-zA-Z]{3}[a-zA-Z]+/.test(name)};
        var fail="";
        if (testName(name))
            fail = "Invalid name";
        else if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0)
            fail = "Invalid name email ";
        else
        if (testName(subject))
            fail = "Invalid subject ";
        else
        if (testName(message))
            fail = "Invalid message";

        if (fail != "") {
            $('#messages').html(fail + "<div class='clear'></div>");
            $('#messages').show();

            return false;
        }


        var dannie = $("form").serialize();

        $.ajax({
            url: 'contactform/form.php',
            type: 'POST',
            data: dannie,
            dataType:'html',
            success: function (data) {
                $('#messages').html(data + "<div class='clear'></div>");
                $('#messages').show();
                $('#form')[0].reset()

            }
        });
    });
});








