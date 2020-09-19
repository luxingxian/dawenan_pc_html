$(document).ready(function() {
  $('body').on("click",".author_message_box .follow",function(){
   if($(this).attr('class')=='follow'){
       $(this).text("已关注");
       $(this).addClass("followed");
       $(this).removeClass("follow");
   }
  })

});

  