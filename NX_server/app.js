// 1:引入第三方模块
const express = require("express");
const mysql=require("mysql");
const cors=require("cors");
const session = require("express-session");
// 2：配置第三方模块
  // 2.1：配置连接池
  var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:3306,
    database:"nx",
    connectionLimit:15
  })
  // 2.2：跨域
  var server=express();
  server.use(cors({
    origin:["http://127.0.0.1:5500","http://localhost:5500"],
    credentials:true
  }))
  // 2.3：session
  server.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
  }))
  // 2.4：指定静态目录
  server.use(express.static('public'));
  
  server.listen(3000);
//首页数据
server.get("/index",(req,res)=>{
  var sql = "select * from nx_index_product where seq_recommended!=0 ORDER BY seq_recommended";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    var obj={code:1,msg:"查询成功",data:result};
    var sql2 = "select * from nx_index_carousel";
    pool.query(sql2,[],(err,result)=>{
      if (err) throw err;
      obj.img=result;
      res.send(obj);
    }) 
  });
})
//商品详情数据
server.get("/details",(req,res)=>{
  var lid=req.query.lid;
  console.log(lid)
  var output={
    product:{},
    carousels:[],
    pics:[],
    onsales:[]
  };
  if(lid!==undefined){
    var sql1 = "select * from nx_laptop where lid=?";
    pool.query(sql1,[lid],(err,result)=>{
      if(err) throw err;
      output.product=result[0];
      console.log(output)
      var family_id = output.product["family_id"];
      var sql2 = "select img,title,href from nx_laptop_carousel where family_id=?";
      pool.query(sql2, [family_id], (err, result) => {
        if(err) throw err;
        console.log(result);
        output.carousels=result;
        var sql3 = "select video,img,pic from nx_laptop_pic where family_id=?";
        pool.query(sql3, [family_id], (err, result) => {
          if(err) throw err;
          console.log(result);
          output.pics=result;
          var sql4 = "select title,subtitle from nx_laptop_onsale where family_id=?";
          pool.query(sql4, [family_id], (err, result) => {
            if(err) throw err;
            console.log(result);
            output.onsales=result;
            res.send(output);
          });
        });
      });
    });
  }else{
    res.send(output)
  }
});
