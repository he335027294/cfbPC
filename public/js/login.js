login.onclick=function(){
    var tip=$("#tip");
    var email=$("#email").val();
    var upwd=$("#upwd").val();
    if(!email||!upwd){
        tip.html("输入项不能为空");
        return;
    }
    var data={email,upwd};
    var url="http://127.0.0.1:3000/login/login";
    //console.log(data);
    $.ajax({
        type: 'POST',
        url,
        data,
        success: function(result){
            console.log(result);
            if(result.code==-1){
                tip.html(result.msg);
            }
            if(result.code==1){
                sessionStorage.setItem("cfbUname",result.msg.uname);
                location.href="./font_page.html";
            }
        }
    });
}