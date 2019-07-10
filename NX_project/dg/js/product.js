$(function () {
  $(".nav_list>ul>li:first-child>a").removeClass("bg_li_small");
  $(".nav_list>ul>li:first-child").removeClass("bg_li");
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