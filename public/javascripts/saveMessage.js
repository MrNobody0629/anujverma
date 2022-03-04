// var host = "http://localhost:3000/api";
var host = "https://anuj-verma.herokuapp.com/api";

function saveMessage(event)
{
    event.preventDefault()
    stageCLick(event);
    
    var name = $('#formname').val();
    var email = $('#formemail').val();
    var subject = $('#formsubject').val();
    var message = $('#formmessage').val();
    if(name == '') {
        $('.state-message').text('Enter Your Name Please..');
        setTimeout(()=>{
            $('.state-message').text('');
            stageIdle(event)
        },5000);
        return false;
    }
    if(email == '') {
        $('.state-message').text('Enter Your Mail Please..');
        setTimeout(()=>{
            $('.state-message').text('');
            stageIdle(event)
            $(event.target).button('reset');
        },5000);
        return false;
    }
    if(message == '') {
        $('.state-message').text('Enter Something..');
        setTimeout(()=>{
            $('.state-message').text('');
            stageIdle(event)
            $(event.target).button('reset');
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
            $('.state-message').text('Your message has been sent. Thank you!');
            setTimeout(()=>{
                $('.state-message').text('');
                stageIdle(event)
            },5000);
        },
        error:function(err)
        {
            $('.state-message').text('Thank you!');
            setTimeout(()=>{
                $('.state-message').text('');
                stageIdle(event)
            },5000);
        }
    });
}

const stageCLick = (event)=>{
    $(event.target).text('Please Wait..');
    $(event.target).css('backgroundColor','red');
}
const stageIdle = (event)=>{
    $(event.target).text('Send Message');
    $(event.target).css('backgroundColor','#149ddd');
}
