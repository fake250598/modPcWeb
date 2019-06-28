$(document).ready(function() {
    $("form#ajax-login-form").submit(function(e){
        e.preventDefault();
        var data = {
            user: {
                email: "joel250598@gmail.com",
                password: "123456"
            }
        }
        $.ajax({
            url: 'localhost:4444/users/login',
            type: "POST",
            dataType: 'json',
            data: data,
            success : function(res) {
                console.log(res);
            }, error: function(xhr, resp, text){
                console.log('cagamos');
            }
        })
    });
});
