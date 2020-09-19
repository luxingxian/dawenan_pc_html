$(document).ready(function () {
    // 遮罩弹层块
    function showMask(i) {
        $("#mask").show();
        //出现遮罩是,不允许下拉滚动
        // $('body').css("overflow", "hidden");
        // $('html').css("overflow", "hidden");
        switch (i) {
            case 'mask_content_delete':
                $("#mask_content_delete").show();
                break;
            case 'submit_success':
                $("#submit_success").css("visibility", "visible");
                break;
            case 'submit_fail':
                $("#submit_fail").css("visibility", "visible");
                break;
            case 'submit_abnormal':
                $("#submit_abnormal").css("visibility", "visible");
                break;
            default:
                break;
        }


    }

    function hideMask() {
        $("#mask").hide();
        // $('body').css("overflow", "auto");
        // $('html').css("overflow", "auto");
        $("#mask_content_delete").hide();
        $("#submit_success").css("visibility", "hidden");
        $("#submit_fail").css("visibility", "hidden");
        $("#submit_abnormal").css("visibility", "hidden");
    }
    // 点击弹层以外区域,隐藏弹层
    $("#mask").click(function () {
        hideMask()
    })
    // 点击弹层内关闭按钮,隐藏弹层
    $(".mask_content_close").click(function () {
        hideMask()
    })
    // 点击弹层内取消按钮,隐藏弹层
    $("#no_delete").click(function () {
        hideMask()
    })



    //  全局变量，记录当前点击的是哪个卡片的删除
    var currText = "";
    // 点击删除按钮,出现确认删除提醒
    $(".delede_article").click(function () {
        currText = $(this).parents(".card");
        console.log(currText)
        showMask('mask_content_delete')
    })
    // 确认删除
    $("body").on('click',"#delete", function () {
        currText.fadeTo("slow", 0.01, function () {
            currText.slideUp("slow", function () {
                currText.remove();
            });
        });
        // currText.remove();
        // currText.animate({
        //     left: '-1100px',
        //     opacity: 'hide'
        // }, "slow");
        // setTimeout(function() {
        //     currText.remove();
        // }, 1000);
        hideMask();
    })

    // 发布
    $("body").on('click',".release_article", function () {
        showMask('submit_success')
        setTimeout(function() {
            hideMask()
        }, 3000);
        // var formData = new FormData();
        // formData.append("sex", $("input[name='sex']:checked").val());
        // formData.append("name", $("input[name='user_name']").val());
        // formData.append("phone", $("input[name='user_phone']").val());
        // formData.append("address", $("input[name='user_address']").val());
        // formData.append("qianming", $("input[name='user_qianming']").val());
    })

});