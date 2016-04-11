


$(window).scroll(function(){

    if($(this).scrollTop() > 200){
        $('.scroll-down svg').css({'display': 'none'});
    }

    if($(this).scrollTop() > 400){
        $('#readmore1').fadeIn().css({'display': 'block'});
    }


    if($(this).scrollTop() > 1000){
        $('#readmore2').fadeIn().css({'display': 'block'});
    }

    if($(this).scrollTop() > 1500){
        $('#readmore3').fadeIn().css({'display': 'block'});
    }

    if($(this).scrollTop() <= 2000){
        $('#readmore4').fadeIn().css({'display': 'block'});
    }




});
