//将数据拉取其他页面
$.ajax({
url:"header.html",
type:"get",
success:function (result) {
  $(result).replaceAll("header");
  $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
}
})

$(function () {
    /* 头部隐藏导航栏 */
  $(window).scroll(function () {
    var carousel_height = $(".carousel").offset().top;
    var sc_height = $(document).scrollTop();
    if (sc_height >= carousel_height) {
      $(".nav_none").addClass("d-flex")
    } else(
      $(".nav_none").removeClass("d-flex")
    )
  });

  /* 地址选择 */
  $(".addres_a")
  //绑定事件处理函数
  .click(function (e) {
    // 查找要修改的元素
    //修改元素
    e.preventDefault();
    $(".addres").removeClass("d-block")
  });
  $(".addres_a_s")
  .click(function (e) {
    e.preventDefault();
    $(".addres").addClass("d-block")
  });
  
  //点击后同步
  $(".my_addres a")
  .click(function (e) {
    e.preventDefault();
    $btn = $(this);
    $btn.addClass("addres_color").siblings().removeClass("addres_color")
    $(".addres_font").html($btn.html())
  })

  /*头部搜索按钮 */
  $("[data-target]")
  .click(function () {
    var $btn = $(this);
    if ($btn.prev().is(".d-none")) {
      $(".btn_input").removeClass("d-none")
    } else {
      $(".btn_input").addClass("d-none")
    }
  })
})