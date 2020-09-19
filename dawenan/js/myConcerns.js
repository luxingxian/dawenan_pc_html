$(document).ready(function () {
    $("body").on("mouseover", ".change_follow", function () {
      if($(this).hasClass("followed")==true){
         $(this).text("取消关注")
      }
    }).on("mouseout", ".change_follow", function () {
        if($(this).hasClass("followed")==true){
           $(this).text("已关注")
        }
      })


      $("body").on("click", ".change_follow", function () {
        if($(this).hasClass("followed")==true){
          $(this).removeClass("followed")
          $(this).addClass("follow")
          $(this).text("+ 关注")
        }else{
          $(this).addClass("followed")
          $(this).removeClass("follow")
          $(this).text("已关注") 
        }
      })




});