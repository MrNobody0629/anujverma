//var host = "http://localhost:3000/api";
var host = "https://anuj-verma.herokuapp.com/api";

function saveMessage(event)
{
    event.preventDefault()
    var name = $('#formname').val();
    console.log(name)
    var email = $('#formemail').val();
    var subject = $('#formsubject').val();
    var message = $('#formmessage').val();
    if(name == '' || email == '' || subject == '' || message == '')
    return false;
    $.ajax({
        url: host+"/saveMessage",
        method:'POST',
        dataType:'json',
        data:{name:name,email:email,subject:subject,message:message},
        success:function(data)
        {
            console.log(data)
        },
        error:function(err)
        {
            console.log(err)
        }
    });
}
