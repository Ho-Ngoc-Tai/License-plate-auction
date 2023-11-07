
$(function () {
    $('#registerForm').validate({
        debug: true
    });
})

$('#btnRegister').on('click', function () {
    var _fullName = $('#txtFullName').val()
    var _address = $('#txtAdress').val()
    var _email = $('#txtEmail').val()
    var _password = $('#txtPassword').val()
    var _confirmPassword = $('#txtConfirmPWD').val()

    var body = {
        email: _email,
        address: _address,
        password: _password,
        fullname: _fullName
    }

    $.ajax({
        url: 'http://localhost:5555/user/register',
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done((data) => {
        console.log(data);
        if (data.success) {
            swal("Good job!", "You clicked the button!", "success");
        } else {
            swal("Invalid captcha.", "You clicked the button!", "error");
        }
    }).fail((xhr, textStatus, err) => {
        console.log('here')
        console.log(xhr)
        console.log(textStatus)
        console.log(err)
    })
});
