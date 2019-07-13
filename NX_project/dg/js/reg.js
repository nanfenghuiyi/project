$(function () {
  //提交数据
  $("#btncheck").click(function () {
    if($("#btncheck").is(":checked")){
      $("#btn").removeAttr("disabled","disabled")
    }else {
      $("#btn").attr("disabled", "disabled")
    }
  })
})
$("#btn").click(function () {
  var u_phone=$("#tel").val();
  var u_pwd=$("#pass").val();
  $.ajax({
    type: "get",
    url: "http://localhost:3000/reg",
    data: {phone:u_phone,upwd:u_pwd},
    dataType: "json",
    success: function (result) {
      if(result.code==1){
        alert("注册成功，请登录");
        location.href = "http://127.0.0.1:5500/NX_project/dg/log.html"
      }else{
        alert("注册失败")
      }
    }
  });

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
      return;
    },
    error: function () {
      return false;
    }
  });
})