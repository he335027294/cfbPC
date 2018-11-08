$.ajax({
    type: 'get',
    url:"http://127.0.0.1:3000/xingcheng/local",
    success: function(result){
        var local=$(".local_trip")[0];
        var html="";
        for(let ele of result){
            html+=           
            `
                <div class="trip_item">
                    <div class="mask"></div>
                    <img src="${ele.img_url}" alt="">
                    <div class="trip_desc">
                        <div>${ele.title}</div>
                        <div>${ele.rel_date} / ${ele.day_count}天 / ${ele.place}</div>
                    </div>
                </div>
            `
        }
        var $local=$(local);
        $local.html(html); 
    }
});
$.ajax({
    type: 'get',
    url:"http://127.0.0.1:3000/xingcheng/foreign",
    success: function(result){
        var foreign=$(".foreign_trip")[0];
        var html="";
        for(let ele of result){
            html+=           
            `
                <div class="trip_item">
                    <div class="mask"></div>
                    <img src="${ele.img_url}" alt="">
                    <div class="trip_desc">
                        <div>${ele.title}</div>
                        <div>${ele.rel_date} / ${ele.day_count}天 / ${ele.place}</div>
                    </div>
                </div>
            `
        }
        var $foreign=$(foreign);
        $foreign.html(html); 
    }
});
var local=$("#local");
var foreign=$("#foreign");
var localPlace=$("#local_place");
var foreignPlace=$("#foreign_place");
var localTrip=$("#local_trip");
var foreignTrip=$("#foreign_trip");
local.click(function(){
    local.addClass("active");
    foreign.removeClass("active");
    localPlace.addClass("active");
    foreignPlace.removeClass("active");
    localTrip.addClass("active");
    foreignTrip.removeClass("active");
})
foreign.click(function(){
    local.removeClass("active");
    foreign.addClass("active");
    localPlace.removeClass("active");
    foreignPlace.addClass("active");
    localTrip.removeClass("active");
    foreignTrip.addClass("active");
})
var $zoneRight=$("#zone_right");
$zoneRight.on("click",".trip_item",()=>{
    location.href="./luguhu.html";
})
