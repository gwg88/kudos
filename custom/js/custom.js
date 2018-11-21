$(function () {
  
  
  $('.t3-spotlight > div').each(function (v,k) {
    var o = $('.t3-spotlight > div').eq(v)
    if(o.children().length < 1) {
      o.css("display","none") 
    }
  })
  
})
