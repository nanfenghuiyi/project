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
    origin: [
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:5500", 
      "http://localhost:5500"
    ],
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

//注册数据
server.get("/reg",(req,res)=>{
  var obj=req.query;
  console.log(obj)
  if(!obj.phone){
    res.send("电话不能为空");
    return;
  };
  if(!obj.upwd){
    res.send("密码不能为空")
    return;
  };
  var sql="insert into nx_user set ?";
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows<0){
      res.send({code:0,msg:"注册失败"})
    }else{
      res.send({code:1,msg:"注册成功"})
    }
  })
})

//注册时查询数据库
// server.get

//用户登录
server.get("/login",(req,res)=>{
  // var $uname=req.query.uname;
  var $phone=req.query.phone;
  var $upwd=req.query.upwd;
  //验证
  /* if (!$phone) {
    res.send("手机号不能为空");
    return;
  };
  if (!$upwd) {
    res.send("密码不能为空");
    return;
  }; */
  var sql = "select * from nx_user where phone=? and upwd=?";
  pool.query(sql,[$phone,$upwd],(err,result)=>{
    if(err) throw err;
    console.log(result,typeof(result))
    if (result.length > 0){
      //将当前登录用户uid保存session
      //result=[{id:1}]
      req.session.uid =result[0].uid;
      res.send({code:1,msg:"登录成功"});
    }else {
      res.send({code:0,msg:"登录失败"});
    }
  })
})

//所有商品数据
server.get("/product_details",(req,res)=>{
  //参数
  var pno=req.query.pno;
  var count=req.query.count;
  //设置默认值
  if(!pno){pno=1};
  if(!count){count=4};
  //sql
  var sql = "select lid,title,pic,price,href from nx_product limit ?,?"
  var offset=(pno-1)*count;
  count=parseInt(count);
  pool.query(sql,[offset,count],(err,result)=>{
    if(err) throw err;
    var obj={
      code:1,
      msg:"查询成功",
      data:result
    };
    obj.data=result;
    var sql = "select count(*) as c from nx_product";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      var pc=Math.ceil(result[0].c)
      obj.pc=pc;
      res.send(obj);
    })
  })
})

//查询指定用户购物车列表
server.get("/cart",(req,res)=>{
  //参数
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  };
  //sql
  var sql = "select id,img_url,title,price,count from nx_cart where uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if (err) throw err;
    res.send({
      code: 1,
      data: result
    })
  })
});
//删除购物车中商品
server.get("/delItem",(req,res)=>{
  //参数购物车 id
  var id=req.query.id;
  //sql
  var sql = "delete from nx_cart where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if (result.affectedRows>0) {
      res.send({code:1,msg:"删除成功"})
    } else {
      res.send({code:-1,msg:"删除失败"})
    }
  })
});
//删除购物车中多个选中的商品
server.get("/delAll",(req,res)=>{
  //参数
  var ids=req.query.ids;
  var sql = `delete from nx_cart there id in (${ids})`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})
