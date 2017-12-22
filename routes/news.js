var express = require('express');
var router = express.Router();
var request = require('request');
var Iconv = require('iconv-lite');
var fs = require("fs");
var Promise = require("bluebird");


/* POST home page. */
router.post('/', function(req, res) {
    var col = req.body.col;
    var num = req.body.num;
    var page = req.body.page;
    request({encoding: null,url:'http://roll.news.sina.com.cn/interface/rollnews_ch_out_interface.php?col='+col+'&spec=&type=&ch=01&k=&offset_page=0&offset_num=0&num='+num+'&asc=&page='+page}, function (err,response,body) {
        // console.log( Iconv.decode(body, 'gb2312'));
        console.log("准备写入文件");
        fs.writeFile('news.js', Iconv.decode(body, 'gb2312')+"module.exports = jsonData;",  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("数据写入成功！");
            // console.log("--------我是分割线-------------")
            // console.log("读取写入的数据！");
            // fs.readFile('news.js', function (err, data) {
            //     if (err) {
            //         return console.error(err);
            //     }
            //     console.log("异步读取文件数据: " + data.toString());
            // });
            var news = require("../news");
            console.log(1);
            // console.log(news.list);
            var data = {
                "code" : 0,
                "msg" : "OK",
                "data":news.list
            };
            // console.log(data);
            res.json(data);
        });
    });
});


module.exports = router;
