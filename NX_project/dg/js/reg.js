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

  //密码确认
  $("#password").blur(function () {
    checkPassword("#pass", "#password", "#passwordInfo");
  }).focus(function () {
    clearInfo("#passwordInfo");
  })
  // 验证
  function checkPassword(pwd1, pwd2, info) {
    var $pwd1 = $(pwd1).val();
    var $pwd2 = $(pwd2).val();
    if ($pwd1 != $pwd2) {
      setInfo(info, "密码不一致");
      return false;
    }
    var reg = /^\w{6,20}$/i;
    if (!reg.test($pwd2)) {
      setInfo(info, "密码必须6到20位数字");
      return false;
    }
    return true;
  }

  //短信验证
  /* $("#phoneMpanel").blur(function () {
    checkPhoneMpanel("#phoneMpanel")
  }) */

  //设置错误信息
  function setInfo(id, info) {
    $(id).text(info);
  }
  //清空错误信息
  function clearInfo(id) {
    $(id).text("");
  }

  // 滑动验证
  $('#mpanel1').slideVerify({
    type: 1, //类型
    vOffset: 5, //误差量，根据需求自行调整
    imgName: [""],
    barSize: {
      width: '250px',
      height: '32px',
    },
    ready: function () {},
    success: function () {
      //提交数据
      //测试
      $("#btn").click(function () {
        if (checkTel("#tel", "#telInfo") && checkpass("#pass", "#passInfo") && checkPassword("#pass", "#password", "#passwordInfo") && $("#btncheck").is(":checked")) {
          var u_phone = $("#tel").val();
          var u_pwd = $("#pass").val();
          $.ajax({
            type: "get",
            url: "http://localhost:3000/reg",
            data: {
              phone: u_phone,
              upwd: u_pwd
            },
            dataType: "json",
            success: function (result) {
              if (result.code == 1) {
                alert("注册成功，请登录");
                location.href = "http://127.0.0.1:5500/NX_project/dg/log.html"
              } else {
                alert("注册失败")
              }
            }
          });
        }else {
          if (!$("#btncheck").is(":checked")) {
            alert("请勾选用户协议");
          }
        }
      })
    },
    error: function () {
      return false;
    }
  });

})
