$.ajax({
    type: 'get',
    url:"http://127.0.0.1:3000/quchu/quchu",
    success: function(result){
        //console.log(result);
        var local=$(".pics")[0];
        var html="";
        for(let ele of result){
            html+=           
            `
                <div class="quchu_item">
                    <div class="mask"></div>
                    <img src=${ele.img_url} alt="">
                    <div class="item_text">
                        <div class="item_title">${ele.title}</div>
                        <div class="item_subtitle">= <span class="item_sub">${ele.subtitle}</span> =</div>
                    </div>
                </div>
            `
        }
        var $local=$(local);
        $local.html(html); 
    }
});
var $pics=$("#pics");
$pics.on("click",".quchu_item",()=>{
    location.href="./luguhu.html"
})
