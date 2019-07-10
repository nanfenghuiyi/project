$.ajax({
  url:"aside.html",
  type:"get",
  success:function (result) {
    $(result).replaceAll("aside");
    $(`<link rel="stylesheet" href="css/aside.css">`).appendTo("head")
  }
})
