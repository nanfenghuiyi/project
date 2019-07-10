$(function () {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/index",
    data: "data",
    dataType: "json",
    success: function (result) {
      //拿取商品数据
      console.log(result)
      //将数据解构出来
      var {data,img}=result;
      //将商品数据解构出来
      var {title,details,pic,price,href}=data;
      for (var i=0;i<data.length;i++) {
        $(`#p${i+1} h3`).html(data[i].title);
        $(`#p${i+1} h3+span`).html(data[i].details);
        $(`#p${i+1} p`).html("¥" + data[i].price);
        //定义空的html，用来接img的模块
        var html="";
        html += `<a href="product_details.html?pid=${data[i].pid}">
          <img class = "img-fluid" src = "http://127.0.0.1:3000/img/index/${data[i].pic}" alt = "">
        </a>`;
        $(`#p${i+1} .my_list`).html(html);
      };
      //轮播图数据
      //将图片数据解构出来
      var carousel=`<div class="carousel-item w-100 active">
          <img class="img-fluid" src="http://127.0.0.1:3000/img/index/${img[0].img}" alt="">
        </div>`;
      for (var i = 1; i < img.length; i++) {
        carousel += `<div class="carousel-item w-100">
          <img class="img-fluid" src="http://127.0.0.1:3000/img/index/${img[i].img}" alt="">
        </div>`;
        $(".carousel-inner").html(carousel)
      }
    }
  });
  //查找触发事件的元素
  //绑定事件处理函数
    //查找要修改的元素
    //修改元素
  
  /* 头部隐藏导航栏 */
  $(window).scroll(function () {
    var carousel_height = $(".carousel").offset().top;
    var sc_height=$(document).scrollTop();
    if (sc_height>=carousel_height){
      $(".nav_none").addClass("d-flex")
    }else(
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
    $btn=$(this);
    $btn.addClass("addres_color").siblings().removeClass("addres_color")
    $(".addres_font").html($btn.html())
  })

  /*头部搜索按钮 */
  $("[data-target]")
  .click(function () {
    var $btn = $(this);
    if ($btn.prev().is(".d-none")) {
      $(".btn_input").removeClass("d-none")
    }else{
      $(".btn_input").addClass("d-none")
    }
  })
})
