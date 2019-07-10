  $.ajax({
  url:"header.html",
  type:"get",
  success:function (result) {
    $(result).replaceAll("header");
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
  }
  })
  //查找触发事件的元素
