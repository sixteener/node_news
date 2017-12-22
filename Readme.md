## nodejs 抓取新浪滚动新闻标题地址等

### install
安装gulp `npm install -g gulp`  

进入项目 `npm install`  

启动项目 `gulp server`

### visit

接口 `http:127.0.0.1:4000/news`

参数 1.col(分类) 2.num(请求多少条) 3.page(第几页页码)

结果

````json
{
    "code": "0",
    "msg": "OK",
    "data": [
        {
            "channel": {
                "title": "国内",
                "id": "90",
                "cType": "col",
                "url": ""
            },
            "title": "天津人大常委会:接受王东峰辞去天津市长的请求",
            "url": "http://news.sina.com.cn/c/nd/2017-12-22/doc-ifypwzxq5423331.shtml",
            "type": "1",
            "pic": "",
            "time": 1513930343
        },
        {
            "channel": {
                "title": "国内",
                "id": "90",
                "cType": "col",
                "url": ""
            },
            "title": "北京轨道交通全路网23日起实现线上购票 车站取票",
            "url": "http://news.sina.com.cn/c/nd/2017-12-22/doc-ifypxrpp3363783.shtml",
            "type": "1",
            "pic": "",
            "time": 1513929969
        },
        {
            "channel": {
                "title": "国内",
                "id": "90",
                "cType": "col",
                "url": ""
            },
            "title": "我国拟修改法官法:明确设立法官遴选委员会",
            "url": "http://news.sina.com.cn/c/nd/2017-12-22/doc-ifypwzxq5416483.shtml",
            "type": "1",
            "pic": "",
            "time": 1513929560
        },
        {
            "channel": {
                "title": "国际",
                "id": "91",
                "cType": "col",
                "url": ""
            },
            "title": "朝核六方会谈韩日团长举行会晤:商讨促朝重返对话",
            "url": "http://news.sina.com.cn/w/2017-12-22/doc-ifypwzxq5416172.shtml",
            "type": "1",
            "pic": "",
            "time": 1513929515
        },
        {
            "channel": {
                "title": "国内",
                "id": "90",
                "cType": "col",
                "url": ""
            },
            "title": "哈尔滨一醉驾司机撞死5名环卫坚称没喝酒(视频)",
            "url": "http://news.sina.com.cn/c/nd/2017-12-22/doc-ifypxrpp3363120.shtml",
            "type": "3",
            "pic": "",
            "time": 1513929470
        }
    ]
}
````