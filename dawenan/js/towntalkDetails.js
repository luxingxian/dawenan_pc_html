function getFous() {
    if ($("#comment_header_input")[0].value == "参与话题") {
        $("#comment_header_input")[0].value = ""
    }
    $("#comment_header_input").addClass("getFous_input")
    $(".content-img-list").show()
    $(".comment_input_release").show();
}

function loseFous() {
    if ($("#comment_header_input")[0].value == "") {
        $("#comment_header_input")[0].value = "参与话题"
        $("#comment_header_input").removeClass("getFous_input")
        $(".comment_input_release").hide();
        $(".content-img-list").hide()
    }
}


$(document).ready(function() {
    $(".comment_input_release").click(function() {
        if ($("#comment_header_input")[0].value != "") {
            let myCommentValue = $("#comment_header_input")[0].value;
            let myName = "11",
                myCommentValueTemplate,
                myHead = "./img/weixin.png";
            if (upImgUrl == "") {
                myCommentValueTemplate = `
                <li class="card">
                <div class="author_message ">
                    <a href="./details.html" target="_blank " class="enter_user_home enter_details ">
                        <img src="${myHead}" alt=" " class="user_head ">
                        <div class="user_basic_message ">
                            <p class="author_name">${myName}</p>
                            <p class="time">${new Date().toLocaleTimeString()}</p>
                        </div>
                    </a>
                </div>
                <div class="text ">
                    <a target="_blank ">
                        <span>
                           ${myCommentValue}
                        </span>
                    </a>

                </div>
                <div class="card_foot ">
                    <ul class="card_foot_love ">
                        <li class="love_btn ">
                            <a title="喜欢 " class="iconfont iconaixin loveClick ">
                                <span class="love_num ">0</span>
                            </a>

                        </li>
                        <li class="num_style_box ">
                            <a title="进入评论详情 " class="iconfont iconpinglun " target="_blank " href="./beautifulPictureDetails.html ">
                                <span class="message_num ">111</span>
                            </a>

                        </li>
                    </ul>
                    <div class="card_foot_share ">
                        <a href="./generatePoster.html " class="share_create_img ">1111</a>
                    </div>
                </div>
            </li>
                    `;
            } else {
                myCommentValueTemplate = `
                <li class="card">
                <div class="author_message ">
                    <a href="./details.html" target="_blank " class="enter_user_home enter_details ">
                        <img src="${myHead}" alt=" " class="user_head ">
                        <div class="user_basic_message ">
                            <p class="author_name">${myName}</p>
                            <p class="time">${new Date().toLocaleTimeString()}</p>
                        </div>
                    </a>
                </div>
                <div class="text ">
                    <a target="_blank ">
                        <span>
                           ${myCommentValue}
                        </span>
                        <img src="${upImgUrl}" alt=" " class="text_img">

                    </a>

                </div>
                <div class="card_foot ">
                    <ul class="card_foot_love ">
                        <li class="love_btn ">
                            <a title="喜欢 " class="iconfont iconaixin loveClick ">
                                <span class="love_num ">0</span>
                            </a>

                        </li>
                        <li class="num_style_box ">
                            <a title="进入评论详情 " class="iconfont iconpinglun " target="_blank " href="./beautifulPictureDetails.html ">
                                <span class="message_num ">111</span>
                            </a>

                        </li>
                    </ul>
                    <div class="card_foot_share ">
                        <a href="./generatePoster.html " class="share_create_img ">1111</a>
                    </div>
                </div>
            </li>
            `;
            }

            $(".card_box").prepend(myCommentValueTemplate);
            $("#comment_header_input")[0].value = "参与话题"
            $("#comment_header_input").removeClass("getFous_input")
            $(".comment_input_release").hide();
            $(".content-img-list").hide();
            $(".content-img-list li").remove();
            upImgUrl = "";
        }

    })
    var choiceTowntalkBtn = $(".comment_header_top_right span a");
    $(choiceTowntalkBtn).click(function() {
        for (let i = 0; i < choiceTowntalkBtn.length; i++) {
            $(choiceTowntalkBtn[i]).removeClass("colorActive")
        }
        $(this).addClass("colorActive")
    })

    var choiceCommentBtn = $(".comment_middle_title span");
    $(choiceCommentBtn).click(function() {
        for (let i = 0; i < choiceCommentBtn.length; i++) {
            $(choiceCommentBtn[i]).removeClass("select_comment")
        }
        $(this).addClass("select_comment")
    })

    var upImgUrl = "";
    $('.add_picture_input').change(function() {
        $(".content-img-list").css("display", "flex")
        var file = this.files[0];
        if (window.FileReader) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(e) {
                upImgUrl = e.target.result,
                $(".add_img_item .iconicon-test").hide();
                $(".change_img").show()
              $(".change_img").attr("src",upImgUrl)
               
            };
        }




    })

});

  