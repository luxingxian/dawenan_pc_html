// 当用户鼠标第一次,放入书写文案区域时,清空提示
function getFous() {
    if ($(".reply_message_area").val() == "请输入回复内容") {
        $(".reply_message_area").val("")
    }

}

function loseFous() {
    // 判断用户是否输入,没有输入,继续显示提示
    if ($(".reply_message_area").val() == "") {
        $(".reply_message_area").val("请输入回复内容");
    }
}


$(document).ready(function () {


    $(".news_box_left_top span").click(function () {
        $(".list").hide();
        switch ($(this).attr("class")) {
            case 'iconfont iconxiaoxikefuxinxitongzhi':
                $("#news_list").show();
                break;
            case 'iconfont iconlinkman-contacts_ico':
                $("#friends_list").show();
                break;
            case 'iconfont iconxitongtongzhi':
                $("#systemNews_list").show();
                break;
            default:
                break;
        }
    })

    var num = $(".news_box_left a");
    $(num).click(function () {
        for (let i = 0; i < num.length; i++) {
            $(num[i]).removeClass("seled_active")
        }
        $(this).addClass("seled_active")
        $(".talking_contacts").text($(this).find(".news_contacts_name").text());
        //     let dd = `
        //     <div class="message_area" style="display:block">
        //    </div>
        //     `;
        //     $(".talking_contacts").after(dd)
        // $(".message_area").append(dd);
    })

    // 监听键盘ctrl+enter,执行发送事件
    $(document).keydown(function (e) {
        console.log(e)
        if (e.keyCode == 13 && e.ctrlKey)
            $(".reply_btn").click();
    })


    // 用户回复信息,发送事件
    $(".reply_btn").click(function () {
        let inputValue = $(".reply_message_area").val();
        if (inputValue == "请输入回复内容" || inputValue == "") {
            alert("请输入内容后,再选择发送!");
            return;
        }
        let imgUrl = './img/weixin.png';
        let myValue = `
            <div class="myreply">
            <p class="myreply_content">
                <span class="real_myreply_content">${inputValue}</span>
                <i class="iconfont iconarrow-fold"></i>
            </p>
            <img src='${imgUrl}' alt="" class="user_head">
           </div> `;
        $(".message_area").append(myValue);
        if ($(".reply_message_area").is(":focus") != true) {
            $(".reply_message_area").val("请输入回复内容");
        } else {
            $(".reply_message_area").val("");
        }

        $('.words_nums .already_write_words_num').text(0);
        $('.message_area').scrollTop($('.message_area')[0].scrollHeight);
        // 模拟给用户的回复
        setTimeout(function () {
            let Value = "自动回复";
            let b = `
                <div class="other_reply">
                <img src="./img/tx.jpeg" alt="" class="user_head">
                <p class="other_reply_content">
                    <span class="real_other_reply_content">${Value}</span>
                    <i class="iconfont iconarrow-fold"></i>
                </p>
            </div>
                `;
            $(".message_area").append(b);
            $('.message_area').scrollTop($('.message_area')[0].scrollHeight);
        }, 2000);


    })




})
// 还可以输入多少字
function checkTxt() {
    var textLength = $('.reply_message_area').val().length;
    $('.words_nums .already_write_words_num').text(textLength);
}