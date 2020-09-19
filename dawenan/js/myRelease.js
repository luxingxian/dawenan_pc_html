$(document).ready(function () {
    //选择类型，已通过。未通过，正在审核，全部
    var timer = null;
    $(".check_box").mouseover(function () {
        $(".checked_items_box").slideDown(600);
        $(".iconarrow-up").addClass("checked_flag_open")
        var Menu = $(".checked_items_box li");
        $(Menu).click(function () {
            for (let i = 0; i < Menu.length; i++) {
                $(Menu[i]).removeClass("seled_active")
            }
            $(this).addClass("seled_active");
            $(".checked_items").text($(this).text());
            $(".checked_items_box").hide();
            $(".iconarrow-up").removeClass("checked_flag_open")
            
            showCard($(this).attr('id'))
        })
    }).mouseleave(function () {
        timer = setTimeout(function() {
            $(".checked_items_box").hide();
            $(".iconarrow-up").removeClass("checked_flag_open")
        }, 400);
    });

    $(".checked_items_box").mouseover(function () {
        $(".checked_items_box").show();
        clearTimeout(timer)
    }).mouseleave(function () {
        clearTimeout(timer)
        $(".checked_items_box").hide()
    });

 // 根据选择的类型去整理数据，进行显示
    function showCard(classSign) {
        // $(".card").find('.author_message .user_operation p span').not(classSign).parents(".card").hide();
        var cards = $(".card");
        for (var i = 0; i < cards.length; i++) {
            console.log(classSign)
            switch (classSign) {
                case 'All':
                    $(cards[i]).show();
                    break;
                default:
                    if ($(cards[i]).find('.author_message .user_operation p span').hasClass(classSign) == true) {
                        $(cards[i]).show();
                    } else {
                        $(cards[i]).hide()
                    }
                    break;
            }
        }

    }

   
function getData() {
        $.ajax({
            url: "",
            type: "",
            data: formData,
            dataType: 'json',
            success: function(){

            },
            error: function(){

            },
        })
    }

});