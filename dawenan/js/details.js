function getFous(i) {
    if ($("#" + i + "")[0].value == "留下您的精彩评论吧") {
        $("#" + i + "")[0].value = ""
    }
    $("#" + i + "").addClass("getFous_input")
    switch (i) {
        case 'main_enter_comment':
            $("#mainReplyBtn").show()
            break;
        case 'reply_enter_comment':
            $("#replyBtn").show()
            break;
        default:
            break;
    }

}

function loseFous(i) {
    if ($("#" + i + "")[0].value == "") {
        $("#" + i + "")[0].value = "留下您的精彩评论吧"
        $("#" + i + "").removeClass("getFous_input");
        $(".comment_input_release").hide();
        switch (i) {
            case 'reply_enter_comment':
                $("#reply_enter_comment").parent().remove()
                break;
            default:
                break;
        }

    }


}


$(document).ready(function () {

    $(".card  .change_follow").click(function () {
        $(this).toggleClass("followed")
        if ($(this).text() == '+关注') {
            $(this).text("取消关注")

        } else {
            $(this).text("+关注")
        }
    })


    $("#mainReplyBtn").click(function () {
        if ($("#main_enter_comment")[0].value != "") {
            let myCommentValue = $("#main_enter_comment")[0].value;
            let myName = "11",
                myHead = "./img/weixin.png";
            let myCommentValueTemplate = `
            <ul class="comment_box">
            <li class="comment_item replay_one">
                <img src="${myHead}" alt=" " class="user_head">
                <ul class="comment_item_user">
                    <li class="user_right">
                        <p class="author_names">
                           <span class="myName"> ${myName}</span>
                        </p>
                    </li>
                    <li class="comment_item_content">
                    <p class="comment_text_box">
                                 <span  class="comment_text">${myCommentValue}</span>
                                 <span class="comment_time ">${new Date().toLocaleString()}</span>
                    </p>
                        <span class="comment_item_user_right love_btn">
                            <a title="回复 " class="reply">回复</a>
                            <span class="fengexian">|</span>
                            <a title="喜欢 " class="iconfont iconaixin loveClick">
                                <span class="love_num">0</span>
                        </a>
                        </span>
                    </li>
                </ul>
            </li>
        </ul>`;
            // var formData = new FormData();
            // formData.append("sex", $("input[name='sex']:checked").val());
            // formData.append("name", $("input[name='user_name']").val());
            // formData.append("phone", $("input[name='user_phone']").val());
            // formData.append("address", $("input[name='user_address']").val());
            // formData.append("qianming", $("input[name='user_qianming']").val());
            // $.ajax({
            //     url: "https://xx.php",
            //     type: "post",
            //     data: data,
            //     dataType: 'json',
            //     success: (res) => {},
            //     error: (err) => {}
            // })
            $(".comment_middle").prepend(myCommentValueTemplate);
            $("#main_enter_comment")[0].value = "留下您的精彩评论吧"
            $("#main_enter_comment").removeClass("getFous_input")
            $(".comment_input_release").hide();
        }

    })



    // 点击回复去动态生成输入框
    var currentUser = "",
        currentUserName = '';
    // currentUser， 当前点击的用户对象
    // currentUserName，当前点击用户对象的名称

    $("body").on('click', ".reply",function () {
        currentUserName = $(this).parents(".comment_item_user").find(".myName").text();
        console.log(currentUserName)
        let imputTem = `
        <div class="comment_header other_reply_item_comment_header">
                <img src="./img/tx.jpeg" alt="" class="user_head">
                <textarea onfocus="getFous('reply_enter_comment')" onblur="loseFous('reply_enter_comment')" class="enter_comment" id="reply_enter_comment">留下您的精彩评论吧</textarea>
                 <span class="comment_input_release" id="replyBtn">发布</span>
         </div>`;

        //  将当前点击的用户对象抛出去，以便后面对评论判断，是在参与对主评论的回复，还是在主评论内回复其他人
        currentUser = $(this).parents(".comment_item");
        $(this).parents(".comment_item").after(imputTem);
        $("#reply_enter_comment").attr("placeholder", "回复" + currentUserName);
        $("#reply_enter_comment").focus();
    })


    //  动态生成的输入框，回复输入完成后,点击发布,追加到对应评论前面
    $("body").on('click',"#replyBtn", function () {
        let myCommentValue = $("#reply_enter_comment")[0].value;
        let myName = "11",
            myHead = "./img/weixin.png",
            myCommentValueTemplate;

        // 用户在对主评论的发表评论，那么评论追加到主评论的后面
        if (currentUser.hasClass("replay_one") == true) {
            myCommentValueTemplate = `
            <li class="comment_item other_reply_item replay_two">
            <img src="${myHead}" alt=" " class="user_head ">
            <ul class="comment_item_user ">
                <li class="user_right">
                    <p class="author_names">
                    <span class="myName"> ${myName}</span>
                    </p>
                </li>
                <li class="comment_item_content ">
                <p class="comment_text_box">
                        <span  class="comment_text">${myCommentValue}</span>
                        <span class="comment_time ">${new Date().toLocaleString()}</span>
                </p>
                    <span class="comment_item_user_right love_btn ">
                        <a title="回复 " class="reply ">回复</a>
                        <span class="fengexian">|</span>
                        <a title="喜欢 " class="iconfont iconaixin loveClick ">
                            <span class="love_num">0</span>
                    </a>
                    </span>
                </li>
            </ul>
          </li> `;
            // let formData = new FormData();
            // formData.append("sex", $("input[name='sex']:checked").val());
            // formData.append("name", $("input[name='user_name']").val());
            // formData.append("phone", $("input[name='user_phone']").val());
            // formData.append("address", $("input[name='user_address']").val());
            // formData.append("qianming", $("input[name='user_qianming']").val());
            // $.ajax({
            //     url: "https://xx.php",
            //     type: "post",
            //     data: data,
            //     dataType: 'json',
            //     success: (res) => {},
            //     error: (err) => {}
            // })
            // currentUser.after(myCommentValueTemplate);
            if(currentUser.parents(".comment_box").find(".open_show_more").length>0){
                currentUser.parents(".comment_box").find(".open_show_more").before(myCommentValueTemplate);
            }else{
                currentUser.parents(".comment_box").append(myCommentValueTemplate);
            }
          
        }


        // 评论别人的评论，或者说，是主评论下面的相互评论,那么评论追加到主评论的后面
        if (currentUser.hasClass("replay_two") == true) {
            myCommentValueTemplate = `
            <li class="comment_item other_reply_item replay_two">
            <img src="${myHead}" alt=" " class="user_head ">
            <ul class="comment_item_user ">
                <li class="user_right">
                    <p class="author_names ">
                    <span class="myName"> ${myName}</span>
                     <span class="replay_user_name"> ${currentUserName}</span>
                    </p>
                </li>
                <li class="comment_item_content ">
                <p class="comment_text_box">
                        <span  class="comment_text">${myCommentValue}</span>
                        <span class="comment_time ">${new Date().toLocaleString()}</span>
                </p>
                    <span class="comment_item_user_right love_btn ">
                        <a title="回复 " class="reply ">回复</a>
                        <span class="fengexian">|</span>
                        <a title="喜欢 " class="iconfont iconaixin loveClick ">
                            <span class="love_num">0</span>
                    </a>
                    </span>
                </li>
            </ul>
         </li> `;
            // let formData = new FormData();
            // formData.append("sex", $("input[name='sex']:checked").val());
            // formData.append("name", $("input[name='user_name']").val());
            // formData.append("phone", $("input[name='user_phone']").val());
            // formData.append("address", $("input[name='user_address']").val());
            // formData.append("qianming", $("input[name='user_qianming']").val());
            // $.ajax({
            //     url: "https://xx.php",
            //     type: "post",
            //     data: data,
            //     dataType: 'json',
            //     success: (res) => {},
            //     error: (err) => {}
            // })
            if( currentUser.parents(".comment_box").find(".open_show_more").length>0){
                currentUser.parents(".comment_box").find(".open_show_more").before(myCommentValueTemplate);
            }else{
                currentUser.parents(".comment_box").append(myCommentValueTemplate);
            }
            // currentUser.parents(".comment_box").find(".replay_one").after(myCommentValueTemplate);
        }
        $("#reply_enter_comment").parent().remove()
    })
    $(".open_show_more").click(function () {
        for(let i=0;i<5;i++){
            let tem=`
            <li class="comment_item other_reply_item replay_two">
            <img src="./img/tx.jpeg " alt=" " class="user_head ">
            <ul class="comment_item_user ">
                <li class="user_right">
                    <p class="author_names ">
                        <span class="myName">用户3</span>
                        <span class="replay_user_name">用户2</span>
                    </p>
                </li>
                <li class="comment_item_content ">
                    <p class="comment_text_box">
                        <span  class="comment_text">啦啦啦啦,我是卖报的小行家啦啦啦啦</span>
                        <span class="comment_time ">今天12:12</span>
                    </p>
                    <span class="comment_item_user_right love_btn ">
                        <a title="回复 " class="reply ">回复</a>
                        <span class="fengexian">|</span>
                        <a title="喜欢 " class="iconfont iconaixin loveClick "><span class="love_num ">0</span></a>
                    </span>
                </li>
            </ul>
        </li>
            `;
        $(this).before(tem)    
        }
        // if ($(this).text() == '展开更多回复') {
        //     $(this).text("收起")
        // } else {
        //     $(this).text("展开更多回复")
        // }

    })
    $("body").on("click", ".details_follow", function () {
          $(this).addClass("followed")
          $(this).removeClass("follow")
          $(this).text("已关注") 
      })


});