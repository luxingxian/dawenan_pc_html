function checkTxt() {
    var textLength = $('.text_area').val().length;
    $('#words_nums').text(200 - textLength);
}

$(document).ready(function () {
    var currentPageId = 1,
        totalNum = 1000; //总数据量。默认长度为0. 注意，是数据条目总数，不是分页总数。
    if (/page/.test(location.href)) {
        // $(window).scrollTop($('#testPage').offset().top);
        currentPageId = location.href.split('page=')[1].split(/\D/g)[0];
    }
    new Pagination($('#testPage'), {
        length: totalNum, //总数据量。默认长度为0. 注意，是数据条目总数，不是分页总数。
        every: 10, //每页显示的条目数
        current: currentPageId, //当前页码数。默认是选中第一页
        href: function (current) { //跳转方式，a链接
            return '?page=' + current;
        }
    });


    var Menu = $(".bottom_menu .bottom_menu_item a");
    $(Menu).click(function () {
        for (let i = 0; i < Menu.length; i++) {
            $(Menu[i]).removeClass("colorActive")
        }

        // 删除原有的内容
        $(".card_box").empty();

        //根据选择按钮的id，去请求不同的内容，发现，关注
        switch ($(this).attr('id')) {
            case 'find':

                break;
            case 'Myfollow':
                let tem=`
                <li class="card">
                <div class="author_message">
                    <a href="./taHome.html" class="enter_details" target="_blank" class="enter_user_home">
                        <img src="./img/tx.jpeg" alt="" class="user_head">
                        <div class="user_basic_message">
                            <p class="author_name">Hhh花花biu</p>
                        </div>
                    </a>

                    <a class="dislike">
                        不喜欢
                        <ul class="dislike_box">
                            <li>违反违规</li>
                            <li>色情不健康</li>
                            <li>广告垃圾</li>
                            <li>其他</li>
                        </ul>
                    </a>

                </div>
                <div class="text">
                    <a href="./details.html" target="_blank">
                        <span class="text_box">
                            我一生渴望被人收藏好,妥善安放,细心保存. <br> 免我惊,免我苦,免我四下流离,免我无枝可依. <br> 我不过等一名前来结发牵手的人,
                            <br> 结结实实伴着走上一程,并无意谈几场惨淡,
                            <br> 不知下落的恋,或是爱......
                        </span>

                    </a>

                </div>

                <div class="card_foot">
                    <ul class="card_foot_love">
                        <li class="love_btn">
                            <a class="iconfont  iconaixin loveClick">
                                <span class="love_num">0</span>
                            </a>
                        </li>
                        <li class="num_style_box">
                            <a class="iconfont iconpinglun" href="./details.html" target="_blank">
                                <span class="message_num">111</span>
                            </a>
                        </li>
                        <li class="num_style_box">
                            <a class="iconfont icontupian" href="./generatePoster.html" target="_blank">
                                <span>生成美图</span>
                            </a>
                        </li>
                    </ul>

                    <div class="card_foot_share">

                        分享到:
                        <a class="share_weixin">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconweixin"></use>
                            </svg>
                            <div class="weixin_saoma">
                                <div class="weixin_saoma_box">
                                    <img src="./img/weixin.png" alt="">
                                    <p>打开微信扫一扫</p>
                                    <p>分享到微信</p>
                                </div>

                                <i class="iconfont iconarrow-fold"></i>
                            </div>
                        </a>
                        <a title="分享到微博" class="weibo">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconweibo"></use>
                            </svg>
                        </a>
                        <a title="分享至QQ好友" class="qq">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconqq"></use>
                            </svg>
                        </a>
                        <a title="分享到QQ空间" class="qqkongjian">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconkongjian"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </li>`;
            for(let i=0;i<9;i++){
                    $(".card_box").append(tem)
            }

                break;
            default:
                break;
        }
        $(this).addClass("colorActive");
    })





    // $(".dislike").click(function() {

    //     // 向左移动,并删除
    //     // $(this).parent().parent().animate({ left: '-1100px', opacity: 'hide' }, "slow");
    //     // setTimeout(function() {
    //     //     $(this).parent().parent().remove();
    //     // }, 1000);


    //     // 缓慢隐藏,并删除
    //     // $(this).parent().parent().fadeTo("slow", 0.01, function() {
    //     //     $(this).slideUp("slow", function() {
    //     //         $(this).remove();
    //     //     });
    //     // });
    // })




    var timer = null;
    // 监听用户鼠标是否移入不喜欢区域
    $("body").on('mouseover', ".dislike", function () {
        $(this).find(".dislike_box").slideDown(200);
    }).on('mouseout', ".dislike", function () {
        let _this = $(this);
        timer = setTimeout(function () {
            _this.find(".dislike_box").slideUp(200);
        }, 200);
    })

    $("body").on('mouseover', ".dislike_box", function () {
        $(this).show();
        clearTimeout(timer);
    })
    // .on('mouseout',".dislike_box", function () {
    //     clearTimeout(timer);
    // })


    var other = "";
    // 举报
    $("body").on('click', ".dislike_box li", function () {

        if ($(this).text() == "其他") {
            $("#mask").show();
            other = $(this);
            $("#mask_content_delete").show();
        } else {
            $("#mask_content_dislike").show();
            $(this).parents("li").animate({
                left: '-1100px',
                opacity: 'hide'
            }, "slow");
            setTimeout(function () {
                $(this).parents("li").remove();
                hideDisk()
            }, 1000);
        }
    })




    $("#delete").click(function () {
        let writeValue = $(".text_area").val();
        console.log(writeValue)
        other.parents("li").animate({
            left: '-1100px',
            opacity: 'hide'
        }, "slow");
        $("#mask_content_dislike").show();
        setTimeout(function () {
            other.parents("li").remove();
            hideDisk();
        }, 1000);

    })
    $("#no_delete").click(function () {
        hideDisk();
    })

    function hideDisk() {
        $("#mask_content_delete").hide();
        $("#mask_content_dislike").hide();
        $("#mask").hide();
    }



    $("#mask_content_delete .mask_content_close").click(function () {
        hideDisk()
    });



});