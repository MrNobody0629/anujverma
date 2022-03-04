var host = window.location.origin+"/api";

function saveMessage(event)
{
    event.preventDefault()
    $('.sendMailBtn').text('Please wait..');
    var name = $('#formname').val();
    var email = $('#formemail').val();
    var subject = $('#formsubject').val();
    var message = $('#formmessage').val();
    if(name == '') {
        $('.state-message').text('Enter Your Name Please..');
        stageIdle();
        setTimeout(()=>{
            $('.state-message').text('');
        },5000);
        return false;
    }
    if(email == '') {
        $('.state-message').text('Enter Your Mail Please..');
        stageIdle();
        setTimeout(()=>{
            $('.state-message').text('');
            $(event.target).button('reset');
        },5000);
        return false;
    }
    if(message == '') {
        $('.state-message').text('Enter Something..');
        stageIdle();
        setTimeout(()=>{
            $('.state-message').text('');
        },5000);
        return false;
    }
    $.ajax({
        url: host+"/saveMessage",
        method:'POST',
        dataType:'json',
        data:{name:name,email:email,subject:subject,message:message},
        success:function(data)
        {
            $('.sendMailBtn').text('Success');
            $('.sendMailBtn').css('backgroundColor','#198754');
            setTimeout(()=>{
                stageIdle(event)
            },10000);
        },
        error:function(err)
        {
            $('.sendMailBtn').text('Success');
            $('.sendMailBtn').css('backgroundColor','#198754');
            setTimeout(()=>{
                stageIdle(event)
            },10000);
        }
    });
}

const stageIdle = ()=>{
    $('.sendMailBtn').text('Send Message');
    $('.sendMailBtn').css('backgroundColor','#149ddd');
}
