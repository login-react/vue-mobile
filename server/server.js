/*
 * @Descripttion: 努力呀 哥们
 * @version:
 * @Author: zhoutaimin
 * @Date: 2020-09-12 22:20:25
 * @LastEditors: zhoutaimin
 * @LastEditTime: 2020-09-29 07:35:43
 */
var express = require("express");
var app = express();
// 考虑到post的请求的参数在请求体内 req.body 所以要安装body-parser来解析请求体中的数据
// 安装body-parser的命令 npm install body-parser --save
var bodyparser = require("body-parser");
const moment = require("moment");
const { v4: uuid4 } = require("uuid");
var mysql = require("mysql");
var db = mysql.createConnection({
  host: "119.45.228.169", // 连接域名
  port: "1298", // 端口号
  user: "root", // 超级管理员
  password: "Yingying147258", // 数据库密码
  database: "docs" // 数据库名称
});

// 以解析表单提交数据为例 application/x-www-form-urlencoded
// extended: false 值是false时解析值是“String”或“Array” 值是true的时候可以解析任意类型的数据

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//设置跨域访问
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    " Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
db.connect();
// app.get("/list", function (req, res) {
//   console.log("====>>>>");
// });
app.post("/doLogin", function(req, res) {
  // 这时通过 req.body就可以拿到请求体中的数据了
  console.log("req================>>>>>>", req.body);
  // res.send("==========================");
  db.query(
    "insert into record(title,time,ang) values(?,?,?)",
    [
      req.body.title,
      moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.ang
    ],
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        // console.log("data", data);
      }
    }
  );
  res.send("成功");
});

app.get("/list", (req, res) => {
  const sql = "select * from record  where title != '' order by time desc";
  db.query(sql, (err, result) => {
    if (err) return console.log("获取数据失败" + err.message);
    // console.log(result);
    //[ RowDataPacket { id: 1, name: 'cc', age: 16, gender: 'girl' } ]
    let newResult = result.map(item => {
      return {
        id: item.id,
        title: item.title,
        ang: item.ang,
        time: moment(item.time).format("YYYY-MM-DD HH:mm:ss"),
        type: item.type
      };
    });
    res.send(newResult);
  });
});

app.listen(5000, () => console.log("success express success"));
