function sosoGetFous() {
    $("#soso").val("");
    $("#recommend").show();
    // $("#recommend").slideDown(400);
}

function sosoLoseFous() {
    if ($("#soso").hasClass("enter_soso") == true) {
        return;
    }
    if ($("#soso").val() == "") {
        $("#soso").val("微信朋友圈文案");
    }
    // $("#recommend").slideUp(400);
    $("#recommend").hide();
}


// 退出登录事件
function signOut() {
    $("#login_or_register_panel").show();
    $("#user_header_panel").hide();
    // window.location.href = "./index.html";
}


// 搜索框推荐，与搜索结果展示
function sosocheckTxt() {
    if ($("#soso").val() != "") {
        $("#search").show();
        $("#recommend").hide();
        $("#search .input_value").text($("#soso").val())
    } else {
        $("#search").hide();
        $("#recommend").show();
    }
}

$(document).ready(function () {
    
$("body").on('mouseover', ".input_hover_content",function () {
    $("#soso").addClass("enter_soso");
}).on('mouseout', function () {
    $("#soso").removeClass("enter_soso");
})


  
    // 监听搜索框，每300毫秒，发生请求
    $("#soso").bind("input propertychange", function (event) {
        setTimeout(function(){
            getSosoData($("#soso").val())
        }, 300);
    });

    // 发送请求，获取到相关数据
    function getSosoData(value) {
        console.log(value)
    }


    // 关注事件
    $(".copyWriting_box_content_right .follow").click(function () {
        $(this).removeClass("follow");
        $(this).addClass("followed");
        $(this).text("已关注");
    })



    //鼠标点击选择弹框内容,执行搜索事件
    var sosoValue = $(".input_hover_content li");
    $(sosoValue).click(function () {
        $("#soso").val($(this).text());
        $("#btn_soso").click();
    })

    //点击搜索按钮,发送请求,重新渲染页面
    $("#btn_soso").click(function () {
        window.location.href = "./soso.html?"
    })
    // 监听鼠标滚动,控制返回顶部显示与隐藏
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 0) {
            $(".return_top").show();
            // $(".subject_box").addClass("fixed_header");
        } else {
            $(".return_top").hide();
            // $(".subject_box").removeClass("fixed_header");
        }
    });

    //返回顶部,带有动画效果
    $(".return_top a").click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 300);
    })


    //  鼠标移入用户头像时,出现菜单框
    var timer = null;
    $(".flex_user_head").mouseover(function () {
        $(".user_panel").slideDown(200);
        var userMenu = $(".user_panel li a");
        $(userMenu).click(function () {
            $(this).addClass("seled_active")
        })

    }).mouseleave(function () {
        timer = setTimeout(function() {
            $(".user_panel").hide();
        }, 200);

    });


    // 监听用户鼠标是否进入用户菜单面板  
    $(".user_panel").mouseover(function () {
        $(".user_panel").show();
        clearTimeout(timer);
    }).mouseleave(function () {
        clearTimeout(timer)
        $(".user_panel").hide()
    });


    $("body").on("click", "#follow_ta", function () {
        if($(this).text()=='关注'){
           $(this).text('取消关注')
        }else{
            $(this).text('关注')
        }

    })


    // 点赞
    $('body').on('click', ".love_btn .loveClick",function () {
        let loveMun = parseInt($(this).find(".love_num").text())
        $(this).toggleClass("iconaixin1");
        $(this).toggleClass("iconaixin");
        if ($(this).hasClass("iconaixin1") == true) {
            $(this).find(".love_num").text(loveMun + 1)
        } else {
            $(this).find(".love_num").text(loveMun - 1)
        }
    })


    // 项目尾部的关于我们，微信公众号
    // $(".foot_btn_weixin").mouseenter(function () {
    //     $(".our_weixin").show()
    // }).mouseleave(function () {
    //     $(".our_weixin").hide()
    // });

    // $(".foot_btn_tel").mouseenter(function () {
    //     $(".our_tel").show()
    // }).mouseleave(function () {
    //     $(".our_tel").hide()
    // });



    var currentUrl = '',
        title = '',
        shareImhUrl = '';
    // 分享到qq。微博，QQ空间
    $(".card_foot_share a").click(function () {
        if ($(this).attr("class") == "share_weixin") {
            return
        }
        currentUrl = window.location.href;

        // title页面不同， title结构不同，主要有，我的评论，我的话题，他的话题，
        title = $(this).parents('.card').find(".text_box").text().replace(/\s/g, "");
        shareImhUrl = $(this).parents('.card').find(".text_img").attr('src');
        console.log(shareImhUrl)
        switch ($(this).attr("class")) {
            case 'weibo':
                window.open('http://service.weibo.com/share/share.php?url=' + currentUrl + '?sharesource=weibo&title=' + title + '&pic=' + shareImhUrl + '&appkey=2706825840')
                break;
            case 'qq':
                window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + currentUrl + '&title=' + title + '&pics=' + shareImhUrl + '&height=&width=')

                break;
            case 'qqkongjian':
                window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + currentUrl + '&sharesource=qzone&title=' + title + '&pics=' + shareImhUrl + '&summary')
                break;

            default:
                break;
        }
    })

    // 分享到微信
    $(".share_weixin").mouseover(function () {
        // $.getJSON("http://zixuephp.net/inc/qrcode_img.php?url=" + currentUrl + "",
        //     function (data) {
        //         console.log(data)
        //     })
        $(this).find(".weixin_saoma").show();
    }).mouseleave(function () {
        $(this).find(".weixin_saoma").hide();
    });





   // 遮罩弹层块
   function showMask(i) {
    //出现遮罩是,不允许下拉滚动
    // $('body').css("overflow", "hidden");
    // $('html').css("overflow", "hidden");
    $("#mask").show();
    switch (i) {
        case "login":
            $("#mask_content_login").show()
            break;
        case "register":
            $("#mask_content_register").show()
            break;

        default:
            break;
    }

}

function hideMask() {
    $("#mask").hide();
    $("#mask_content_login").hide();
    $("#mask_content_register").hide();
    $('body').css("overflow", "auto");
    $('html').css("overflow", "auto");
}

// 点击登录按钮,出现登录弹层
$("#login").click(function () {
    showMask("login")
})

// 点击注册按钮,出现注册弹层
$("#register").click(function () {
    showMask("register")
})

// 点击弹层以外区域,隐藏弹层
$("#mask").click(function () {
    hideMask()
})

// 点击弹层内关闭按钮,隐藏弹层
$(".mask_content_close").click(function () {
    hideMask()
})




// 注册页的直接登录

$("#direct_login").click(function () {
    $("#mask_content_register").hide();
    $("#mask_content_login").show();
})


});