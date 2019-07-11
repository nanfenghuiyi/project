$(function () {
  //读取数据库
  $.ajax({
    type:"get",
    url:"http://localhost:3000/product_details",
    data:"data",
    dataType:"json",
    success:function (result) {
      console.log(result);
    }
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