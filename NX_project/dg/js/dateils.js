$(function () {
  //读取数据库
  if(location.search!==""){
    //获得地址栏中的?lid=1
    var lid=location.search.split("=")[1];
    $.ajax({
      type:"get",
      url:"http://localhost:3000/details",
      data:{lid},
      dataType:"json",
      success:function (result) {
        console.log(result);
        //将数据解构出来
        var {product,pics,onsales,carousels}=result;
        //将商品数据解构出来
        var {title,price,kg,num,size,spce}=product;
        $("#title").html(title);
        $(".price").html("¥"+price);
        $("#kg").html("约"+kg+"g");
        $("#num").html(`含${num}套餐具`);
        $("#size").html(`约${size}cm`);
        //商品图片数据
        var pics=pics[0];
        //定义空img,用来接img片段
        var img="";
        img += `<img class="img-fluid" src="http://127.0.0.1:3000/img/product/${pics.img}" alt="">`;
        $("#img").html(img);
        //定义空video,用来接video片段
        var video="";
        video += `<video src="http://127.0.0.1:3000/img/product/${pics.video}" controls type="vide0/mp4"  preload="auto" ></video>`;
        $("#video").html(video);
        //定义空pic,用来接img片段
        var pic="";
        pic += `<img class="img-fluid" src="http://127.0.0.1:3000/img/product/${pics.pic}" alt="">`;
        $("#pic").html(pic);
        //优惠促销数据
        var onsale=onsales[0];
        $("#onsale1").html(onsale.title)
        $("#onsale2").html(onsale.subtitle)
        //详情轮播图
        var carousel = `<div class="carousel-item w-100 active">
          <img class="img-fluid" src="http://127.0.0.1:3000/img/product/${carousels[0].img}" alt="">
        </div>`;
        for (var i = 1; i < carousels.length; i++) {
          carousel += `<div class="carousel-item w-100">
          <img class="img-fluid" src="http://127.0.0.1:3000/img/product/${carousels[i].img}" alt="">
        </div>`;
          $(".carousel-inner").html(carousel)
        }
      }
    })
  };

  //规格选择
  $("li.spce1").click(function () {
    $("#num").html("含5套餐具");
    $("#size").html("约15x15x3cm");
    $("#kg").html("约545g");
    $(".price").html("¥298");
  })
  $("li.spce2").click(function () {
    $("#num").html("含10套餐具");
    $("#size").html("约20x20x3cm");
    $("#kg").html("约1090g");
    $(".price").html("¥458");
  })
  $("li.spce3").click(function () {
    $("#num").html("含15套餐具");
    $("#size").html("约25x25x3cm");
    $("#kg").html("约1635g");
    $(".price").html("¥680");
  })
  $("li.spce4").click(function () {
    $("#num").html("含20套餐具");
    $("#size").html("约33x33x3cm");
    $("#kg").html("约2725g");
    $(".price").html("¥1120");
  })

  //隐藏小图样式
  $(".nav_list>ul>li:first-child>a").removeClass("bg_li_small");
  $(".nav_list>ul>li:first-child").removeClass("bg_li");
  //去掉头部隐藏导航栏
  $(".nav_none").remove();
  /*隐藏购物栏*/
  $(window).scroll(function () {
    var pro_img_height = $('.pro_img').offset().top;
    var pro_height=$(document).scrollTop();
    if (pro_height >= pro_img_height){
      $(".pro_shop_none").addClass("d-flex")
    }else{
      $(".pro_shop_none").removeClass("d-flex")
    }
  })
  /*建议食用人数*/
  /* 查找触发事件的元素 */
  $("[data-target=tab]")
  /* 绑定事件处理函数 */
  .click(function () {
    /* 查找要修改的元素 */
    var $btn=$(this);
    /* 修改元素 */
    $btn.parent()
    .addClass("active")
    .siblings().removeClass("active")
    /* 同步隐藏购物栏 */
    $(".Btn").html(' ('+$btn.html()+')');
  })
})