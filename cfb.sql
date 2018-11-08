set names utf8;
DROP DATABASE IF EXISTS cfb;
CREATE DATABASE cfb CHARSET=utf8;
USE cfb;

#用户表 cfb_userlist
CREATE TABLE cfb_userlist(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    email   VARCHAR(64),
    uname   VARCHAR(64),
    upwd    VARCHAR(32)
);
INSERT INTO cfb_userlist VALUES
(null,"335027294@qq.com","he",123456),
(null,"123@","hey",123456);
#行程 cfb_xingcheng
#行程国内 cfb_xingcheng_local
CREATE TABLE cfb_xingcheng_local(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    title   VARCHAR(32),
    rel_date VARCHAR(32),
    day_count INT, 
    place   VARCHAR(64),
    img_url VARCHAR(128)
);
INSERT INTO cfb_xingcheng_local VALUES
(null,"秋意浓，蓉城红","2018/10/1",7,"成都","./img/xingcheng/local/蓉城.jpg"),
(null,"这个假期一起去开化","2018/10/2",4,"衢州，杭州","./img/xingcheng/local/开化.jpg"),
(null,"朋友的故乡---溪口","2018/9/23",2,"宁波，温州","./img/xingcheng/local/溪口.jpg"),
(null,"从苍山洱海到雪山冰川","2018/10/1",7,"丽江，大理，香格里拉","./img/xingcheng/local/丽江.jpg"),
(null,"西北大环线追逐最后的银河季","2018/9/30",9,"敦煌，张掖，青海湖","./img/xingcheng/local/敦煌.jpg"),
(null,"海韵大连","2018/9/29",8,"大连","./img/xingcheng/local/大连.jpg");
#行程国外 cfb_xingcheng_foreign
CREATE TABLE cfb_xingcheng_foreign(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    title   VARCHAR(32),
    rel_date VARCHAR(32),
    day_count INT, 
    place   VARCHAR(64),
    img_url VARCHAR(128)
);
INSERT INTO cfb_xingcheng_foreign VALUES
(null,"北极之光 枫光无限","2018/9/25",18,"温哥华，黄刀","./img/xingcheng/foreign/温哥华.jpg"),
(null,"英伦和爱尔兰","2018/8/25",11,"伦敦，牛津，都柏林","./img/xingcheng/foreign/英伦.jpg"),
(null,"左手是沙 右手为海","2018/6/11",6,"迪拜，阿布扎比","./img/xingcheng/foreign/迪拜.jpg"),
(null,"岛中岛","2018/6/10",4,"宿雾，薄荷岛","./img/xingcheng/foreign/宿雾.jpg"),
(null,"夏日祭","2018/7/24",11,"东京，京都，大阪，奈良","./img/xingcheng/foreign/东京.jpg"),
(null,"萨瓦迪卡 我来啦！","2018/7/23",8,"曼谷，清迈，普吉岛","./img/xingcheng/foreign/萨瓦迪卡.jpg");

#去处 cfb_quchu
CREATE TABLE cfb_quchu(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    title   VARCHAR(64),
    subtitle VARCHAR(64),
    img_url VARCHAR(128)
);
INSERT INTO cfb_quchu VALUES
(null,"这个小国，建筑也奇葩","新加坡独特建筑鉴赏","./img/quchu/小国.jpg"),
(null,"湿身趴体邀请函","地表最强打水仗 Mark一下","./img/quchu/湿身.jpg"),
(null,"玩的就是心跳","全球五大跳伞圣地大揭秘","./img/quchu/跳伞.jpg"),
(null,"错过又要等一年","2018日本樱花花期预测公布","./img/quchu/樱花.jpg"),
(null,"中国最有年味的地方","小年夜已至，年味渐浓","./img/quchu/小年.jpg"),
(null,"蛙蛙的旅行地图","我一个人吃饭旅行 到处走走停停","./img/quchu/青蛙.jpg"),
(null,"今年春节 在这里过","从夏威夷的海边到斯里兰卡的山顶","./img/quchu/夏威夷.jpg"),
(null,"你是如此清澈又神秘","沉醉在贝加尔湖的蓝眼眸里","./img/quchu/贝加尔湖.jpg");




