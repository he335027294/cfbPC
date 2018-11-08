(function(){
    var $lunboPic=$(".phone_lunbo>div");
    var i=0;
    var move=1;
    var change=function(){
        if(move==1){
            i<4?i++:i=0; 
            $lunboPic.css("left",`-${i*238}px`);
        }   
    }
    setInterval(change,3000);
})()
