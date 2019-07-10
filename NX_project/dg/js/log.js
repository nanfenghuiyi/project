(function () {
  /*选择登录方式*/
  //Dom 4步
  // 1.找到触发事件的所有元素
  var login_phone = document.getElementById("login_phone");
  var login_pwd = document.getElementById("login_pwd");
  //--需要修改的元素
  var login_phone_log = document.getElementById("login_phone_log");
  var login_pwd_log = document.getElementById("login_pwd_log");
  // 2.为元素绑定事件处理函数
  // 手机验证登录
  login_phone.onclick = function () {
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
  }
})()