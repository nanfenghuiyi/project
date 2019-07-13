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
    return;
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
    var reg = /^\d{6,20}$/;
    var $Pass = $(id).val();
    if (!reg.test($Pass)) {
      setInfo(info, "密码必须6到20位数字");
      return false;
    }
    return;
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
    var reg = /^\d{6,20}$/;
    if (!reg.test($pwd2)) {
      setInfo(info, "密码必须6到20位数字");
      return false;
    }
    return;
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

})