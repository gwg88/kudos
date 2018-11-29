(function($){

  $(function () {
    
    // 去除无内容模块
    $('.t3-spotlight > div').each(function (v,k) {
      var o = $('.t3-spotlight > div').eq(v)
      if(o.children().length < 1) {
        o.css("display","none") 
      }
    })
    
    
    // 店面风采 列表
    $(window).on("resize",function () {
      $(".shop-list > ul > li .moduleItemIntrotext .moduleItemImage").css("height",$(".shop-list > ul > li .moduleItemIntrotext .moduleItemImage").width()*0.65)
    })
    $(".shop-list > ul > li .moduleItemIntrotext .moduleItemImage").css("height",$(".shop-list > ul > li .moduleItemIntrotext .moduleItemImage").width()*0.65)
    
    
    // // 表单交互
    $('#info_form').on('submit', function(e){
      formSubmit();
      e.preventDefault(); 
    })
    
    function formSubmit () {
      if ($("#name_info").val() !== "" && 
          $("#phone_info").val() !== "" &&
          $("#city_info").val() !== "" &&
          $("#wechat_info").val() !== "" &&
          $("#piitext_info").val() !== "" ) {
      	$.ajax({
          type: "post",
          url: "http://www.hzmumi.com/kudos/kudos_pii.php",
          data: $('#info_form').serialize(),
        }).success(function(message) {
          fixText ("提交成功")
          console.log("formSubmit message：",message)
        }).fail(function(err){
          fixText ("提交失败，请检查并填写完整信息")
          console.log("formSubmit err：",err)
        })
      }else {
        fixText ("提交失败，请检查并填写完整信息")
      }
 
    }
    
    function fixText (text,fn) {
      var str = text;
      var fixText = null;
      if ($("body").hasClass("isOnFixText")) {
        return;
      }else {
        $("body").addClass("isOnFixText")
        $("body").append('<div class="fix-text"><div class="text">'+ str +'</div></div>');
        fixText = $("body").find(".fix-text");
        fixText.removeClass("animate");
        fixText.addClass("animate");
      }
  
  
      fixText.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function () {
        fixText.remove();
        $("body").removeClass("isOnFixText");
        if (fn) {
          fn();
        }
      })
    }
    
    
    
  })


})(jQuery);