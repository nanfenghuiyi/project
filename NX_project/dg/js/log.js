$(function () {
  /* 格式验证 */
  // 手机号
  $("#tel").blur(function () {
    //对手机号码进行验证
    checkTel("#tel", "#telInfo");
  }).focus(function () {
    clearInfo("#telInfo");
  })
  //验证
  function checkTel(id, info) {
    var reg = /^[1][0-9]{10}$/;
    var $tel = $(id).val();
    if (!reg.test($tel)) {
      setInfo(info, "手机格式不正确");
      return false;
    }
    return true;
  }

  // 密码
  $("#pass").blur(function () {
    //对密码进行验证
    checkpass("#pass", "#passInfo");
  }).focus(function () {
    clearInfo("#passInfo");
  });
  // 验证
  function checkpass(id, info) {
    var reg = /^\w{6,20}$/i;
    var $Pass = $(id).val();
    if (!reg.test($Pass)) {
      setInfo(info, "密码必须6到20位数字");
      return false;
    }
    return true;
  }

  //设置错误信息
  function setInfo(id, info) {
    $(id).text(info);
  }
  //清空错误信息
  function clearInfo(id) {
    $(id).text("");
  }

  //登录验证
  $("#btn1").click(function () {
    if (checkTel("#tel","#telInfo")&&checkpass("#pass","#passInfo")){
      var phone =$.trim($("#tel").val());
      var upwd =$.trim($("#pass").val());
      $.ajax({
        type: "get",
        url: "http://localhost:3000/login",
        data: {
          phone:phone, upwd:upwd
        },
        dataType: "json",
        success: function (result) {
          if (result.code == 1) {
            alert("登录成功");
            location.href = "http://127.0.0.1:5500/NX_project/dg/index.html"
          } else {
            alert("登录失败")
          }
        }
      });
      console.log(1111)
    }else {
      console.log(2222)
    }
  })


  /*选择登录方式*/
  //Dom 4步
  // 1.找到触发事件的所有元素
  /* var login_phone = document.getElementById("login_phone");
  var login_pwd = document.getElementById("login_pwd"); */
  var $login_phone = $("#login_phone");
  var $login_pwd = $("#login_pwd");
  //--需要修改的元素
  /* var login_phone_log = document.getElementById("login_phone_log");
  var login_pwd_log = document.getElementById("login_pwd_log"); */
  var $login_phone_log = $("#login_phone_log");
  var $login_pwd_log = $("#login_pwd_log");
  // 2.为元素绑定事件处理函数
  // 手机验证登录
  /* login_phone.onclick = function () {
    // 3.查找要修改的元素
    //--上面已有
    // 4.修改元素
    login_phone_log.style.display = "flex";
    login_phone.style.color = "#F5421F";
    login_pwd_log.style.display = "none";
    login_pwd.style.color = "#000";
  }
  // 账号密码登录
  login_pwd.onclick = function () {
    // 3.查找要修改的元素
    //--上面已有
    // 4.修改元素
    login_phone_log.style.display = "none";
    login_phone.style.color = "#000";
    login_pwd_log.style.display = "flex";
    login_pwd.style.color = "#F5421F";
  } */
  $login_phone.click(function () {
    $login_phone_log.hide().show();
    $login_phone.addClass("my_color")
    $login_pwd_log.show().hide();
    $login_pwd.removeClass("my_color");
  })
  $login_pwd.click(function () {
    $login_phone_log.show().hide();
    $login_phone.removeClass("my_color");
    $login_pwd_log.hide().show();
    $login_pwd.addClass("my_color");
  })
})