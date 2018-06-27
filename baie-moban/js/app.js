$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop_num = $(window).scrollTop();
    if(scrollTop_num >= 100) {
      $(".navbar").addClass("navbar-inverse")
      $(".navbar-collapse").addClass("navbar-inverse")
    } else {
      $(".navbar").removeClass("navbar-inverse")
      $(".navbar-collapse").removeClass("navbar-inverse")
    }
  });
  $(".dropdown").hover(function () {
      $(this).addClass("open");
    },
    function () {
      $(this).removeClass("open");
    }
  );
  var last_img,last_btn;
  $(".pioneer-box1 .b-btn").click(function(){
    var _system = $(this).data('system');
    var ele = $("#"+_system);
    var btn_orange_src = "/templets/baie-moban/icon/icon-"+_system+"-orange.png";
    var btn_default_src = "/templets/baie-moban/icon/icon-"+_system+".png";
    var detailEle = $(".pioneer-box1 .detail");
    if (last_img) {
      var last_system = last_btn.data('system');
      var lastBtn_default_src = "/templets/baie-moban/icon/icon-"+last_system+".png";
      last_img.addClass("hidden");
      if (last_img.selector === ele.selector) {
        if(detailEle.hasClass("hidden")){
          detailEle.removeClass("hidden");
          $(this).attr("src",btn_orange_src);
        }else {
          detailEle.addClass("hidden");
          $(this).attr("src",btn_default_src);
        }
      }else {
        detailEle.removeClass("hidden");
        last_btn.attr("src",lastBtn_default_src);
        $(this).attr("src",btn_orange_src);
      }
    }else {
      detailEle.removeClass("hidden");
      $(this).attr("src",btn_orange_src);
    }
    if(detailEle.hasClass("hidden")){
      $(".btn-box:first-child").css("padding-bottom","50px");
    } else {
      $(".btn-box:first-child").css("padding-bottom","33px");
    }
    last_img = ele;
    last_btn = $(this);
    ele.removeClass("hidden");
  })
  //轮播
  var swiper = new Swiper('.banner-swiper', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    autoplay : 3000,
  });
  //list页点击更多加载
  if ($.ias) {
    var ias = $.ias({
      container: ".listbox", //包含所有文章的元素
      item: ".item", //文章元素
      pagination: ".pagelist", //分页元素
      next: ".pagelist a.nextpage", //下一页元素
    });
    ias.extension(new IASSpinnerExtension({
      src: "/img/load.gif", //此选项为加载时缓冲图片
      html: '<p class="baie-btn-more"  style="text-align: center;">加载中...</p>'
    }));
    ias.extension(new IASTriggerExtension({
      text: '点击加载更多', //此选项为需要点击时的文字
      html: '<p class="baie-btn-more"  style="text-align: center; cursor: pointer;"><a><img src="/templets/baie-moban/icon/btn-more.png" alt=""></a></p>',
      offset: 1 //设置此项，如 offset:2 页之后需要手动点击才能加载，offset:!1 则一直为无限加载
    }));
    ias.extension(new IASNoneLeftExtension({
      text: '已经到底了', // 加载完成时的提示
      html: '<p class="baie-btn-more" style="text-align: center;color:#999"><b class="baie-btn-more-line"></b><a>{text}</a><b class="baie-btn-more-line"></b></p>',
    }));
  }
  //typename
  var typename = $("#typename").text(),
      typeTopId = $("#typeTopId").text(),
    activeEle;
  switch (typename) {
    case "百e新闻":
      activeEle = ".baieNav-news";
      break;
    case "百e动态":
      activeEle = ".baieNav-news";
      break;
    case "志愿者服务":
      activeEle = ".baieNav-publicWelfare";
      break;
    case "公益大事记":
      activeEle = ".baieNav-publicWelfare";
      break;
    case "创业案例":
      activeEle = ".baieNav-pioneer";
      break;
    case "创业文章":
      activeEle = ".baieNav-pioneer";
      break;
  }
  switch (typeTopId) {
    case "30":
      activeEle = ".baieNav-product";
      break;
    case "13":
      activeEle = ".baieNav-walkInBaie";
      break;
  }
  $("#baie-navbar "+activeEle).addClass("baie-nav-active")
});