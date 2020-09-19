$(document).ready(function() {
    $(".checked_items").text($(".checked_items_box li:first").text())


    var timer = null;
    $(".check_box").mouseover(function() { 
        $(".checked_items_box").slideDown(600);
        $(".iconarrow-up").addClass("checked_flag_open")   
            //当前鼠标选中选项,改变样式后,隐藏面板
        var Menu = $(".checked_items_box li");
        $(Menu).click(function() {
            for (let i = 0; i < Menu.length; i++) {
                $(Menu[i]).removeClass("seled_active")
            }
            $(this).addClass("seled_active");
            $(".checked_items").text($(this).text());
            $(".checked_items_box").hide();
            $(".iconarrow-up").removeClass("checked_flag_open")  
        })
    }).mouseleave(function() {  
        timer = setTimeout(function() {
            $(".checked_items_box").hide();
            $(".iconarrow-up").removeClass("checked_flag_open")  
        }, 400);  
    }); 


    $(".checked_items_box").mouseover(function() { 
        $(".checked_items_box").show(); 
        clearTimeout(timer)
    }).mouseleave(function() {  
        clearTimeout(timer) 
        $(".checked_items_box").hide()
    }); 

    // $("body").on("mouseover", "#follow_ta", function () {
    //     if($(this).text()=='已关注'){
    //        $(this).text("取消关注")
    //     }
    //   }).on("mouseout", "#follow_ta", function () {
    //       if($(this).text()=='已关注'){
    //          $(this).text("已关注")
    //       }
    //     })
  
  
        // $("body").on("click", "#follow_ta", function () {
        //     if($(this).text()=='关注'){
        //        $(this).text('取消关注')
        //     }else{
        //         $(this).text('关注')
        //     }

        // })

});

  