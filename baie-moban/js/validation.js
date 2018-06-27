(function () {
  //姓名
  /**$(".baieInputName").blur(function() {
    var names = /^[\u4E00-\u9FA5]{2,5}$/; //验证规则
    var str = $(".baieInputName").val();
    var r = str.match(names);
    if(str == "") {
      $(this).parent().removeClass("has-success");
      $(this).parent().addClass("has-error");
      $(this).siblings(".control-label").html("姓名不能为空");
      $(this).siblings(".control-label").removeClass("hidden");
    } else {
      if(r != null) {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).siblings(".control-label").addClass("hidden");
      } else {
        $(this).parent().removeClass("has-success");
        $(this).parent().addClass("has-error");
        $(this).siblings(".control-label").html("姓名输入错误");
        $(this).siblings(".control-label").removeClass("hidden");
      }
    }
  });
  
  //邮件
  $(".baieInputEmail").blur(function() {
    var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //验证规则
    var str = $(".baieInputEmail").val();
    var r = str.match(email);
    if(str == "") {
      $(this).parent().removeClass("has-success");
      $(this).parent().addClass("has-error");
      $(this).siblings(".control-label").html("邮件地址不能为空");
      $(this).siblings(".control-label").removeClass("hidden");
    } else {
      if(r != null) {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).siblings(".control-label").addClass("hidden");
      } else {
        $(this).parent().removeClass("has-success");
        $(this).parent().addClass("has-error");
        $(this).siblings(".control-label").html("请输入正确的邮件地址");
        $(this).siblings(".control-label").removeClass("hidden");
      }
    }
  });
  
  //电话
  $(".baieInputTel").blur(function() {
    var phone = /^(13|15|18|14|17)[0-9]{9}$/; //验证规则
    var str = $(".baieInputTel").val();
    var r = str.match(phone);
    if(str == "") {
      $(this).parent().removeClass("has-success");
      $(this).parent().addClass("has-error");
      $(this).siblings(".control-label").html("手机号码不能为空");
      $(this).siblings(".control-label").removeClass("hidden");
    } else {
      if(r != null) {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).siblings(".control-label").addClass("hidden");
      } else {
        $(this).parent().removeClass("has-success");
        $(this).parent().addClass("has-error");
        $(this).siblings(".control-label").html("请输入正确的手机号码");
        $(this).siblings(".control-label").removeClass("hidden");
      }
    }
  });**/
  
  //留言
  var baieInputMessage = $(".baieInputMessage");
  baieInputMessage.blur(function() {
    if(baieInputMessage.val() === "") {
      $(this).parent().removeClass("has-success");
      $(this).parent().addClass("has-error");
      $(this).siblings(".control-label").html("留言内容不能为空");
      $(this).siblings(".control-label").removeClass("hidden");
    } else {
      $(this).parent().removeClass("has-error");
      $(this).parent().addClass("has-success");
      $(this).siblings(".control-label").addClass("hidden");
    }
  });
  
  $("#submit").click(function(){
    if(baieInputMessage.val() === "") {
      baieInputMessage.parent().removeClass("has-success");
      baieInputMessage.parent().addClass("has-error");
      baieInputMessage.siblings(".control-label").html("留言内容不能为空");
      baieInputMessage.siblings(".control-label").removeClass("hidden");
      return false;
    }
  })
})()