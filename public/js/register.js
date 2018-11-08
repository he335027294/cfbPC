register.onclick=function(){
    var tip=$("#tip");
    var email=$("#email").val();
    var uname=$("#uname").val();
    var upwd=$("#upwd").val();
    var checkupwd=$("#checkupwd").val();
    var isAgree=$("#isAgree").prop('checked');
    console.log(email,uname,upwd,checkupwd,isAgree);
    var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]*/;
    if(!email||!uname||!upwd||!checkupwd){
        tip.html("输入项不能为空");
        return;
    }
    if(!reg.test(email)){
        tip.html("邮箱格式不正确");
        return;
    }
    if(upwd.length<6||upwd.length>12){
        tip.html("密码格式不正确");
        return;    
    }
    if(upwd!=checkupwd){
        tip.html("两次密码输入不一致");
        return;
    }
    if(!isAgree){
        tip.html("您必须先同意使用协议");
        return;
    }
    var data={email,uname,upwd}
    var url="http://127.0.0.1:3000/register/register"
    //console.log(data);
    $.ajax({
        type: 'POST',
        url,
        data,
        success: function(result){
            // console.log(result);
            if(result.code==-1){
                tip.html(result.msg);
            }
            if(result.code==1){
                if(confirm(result.msg+"点击确定为您跳转至登陆页面")){
                    location.href="./login.html"
                }
            }
        }
    });
}