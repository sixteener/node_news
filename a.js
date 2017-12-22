// var async = require('async');
// var fs = require("fs");
// async.series({
//     one: function(callback){
//         console.log("准备写入文件");
//         fs.writeFile('input.txt', "123",  function(err) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("数据写入成功！");
//             console.log("--------我是分割线-------------");
//             console.log("读取写入的数据！");
//         });
//         callback(null, 1);
//     },
//     two: function(callback){
//         fs.readFile('input.txt', function (err, data) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("异步读取文件数据: " + data.toString());
//         });
//         callback(null, 2);
//     }
// },function(err, results) {
//     console.log(results);
// });