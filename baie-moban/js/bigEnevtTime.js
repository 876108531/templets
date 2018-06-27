$(document).ready(function(){
  var dataEleArr = $('#event-data li[data-eventtime]');
  
  var dataEleObj = {};
  dataEleArr.each(function () {
    var eventtime = $(this).data('eventtime').toString();
    
    // 判断该年份的大事记有无创建
    if(dataEleObj.hasOwnProperty(eventtime)) {
      // 插入大事记内容
      $("#bigEnevt"+eventtime).prepend($(this));
      
      // 记录
      dataEleObj[eventtime].push($(this));
    }else {
      // 新建导航
      var newLi = document.createElement("li"),
        newLabel = document.createElement("label"),
        newContent = document.createTextNode(eventtime);
      newLabel.setAttribute("data-eventtime", eventtime);
      newLabel.appendChild(newContent);
      newLi.appendChild(newLabel);
      $(".event_year").prepend(newLi);
      
      // 创建大事记内容
      var newDiv = document.createElement("div");
      newDiv.id = "bigEnevt"+eventtime;
      $(".event_list").prepend(newDiv);
      $("#bigEnevt"+eventtime).prepend($(this));
      
      // 记录
      dataEleObj[eventtime] = [$(this)];
    }
  });
  
  // 展开按钮
  if ($(".event_year li").length>3) { // 判断是否显示展开按钮
    $(".big-more").removeClass("hidden");
  }
  $(".big-more").click(function(){
    $(this).addClass("hidden")
    $(".event_year").removeClass("over-hidden");
  });
  
  // 年代导航按钮
  var activeEle = $(".event_year li:first-child");
  activeEle.addClass("big-active");
  $("label").click(function(){
    var year = $(this).data("eventtime");
    var eleTag = "li[data-eventtime="+year+"]";
    $(eleTag).parent().prevAll("div").slideUp();
    $(eleTag).parent().slideDown().nextAll("div").slideDown();
    $(this).parent().addClass("big-active");
    activeEle.removeClass("big-active");
    activeEle = $(this).parent();
  });
  
})