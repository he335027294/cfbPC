$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        console.log(topp);
        if(topp>100){
            $(".left_change").css({margin:"30px 0px",transition:"1s"});
            $(".right_change").css({margin:"30px 0px",transition:"1s"});
        }
        if(topp>900){
            $(".zone3").css({opacity:1})
        }
        if(topp>1900){
            $(".zone4").css({opacity:1})
        }
    })  
});