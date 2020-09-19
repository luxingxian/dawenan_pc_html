function getFous(i) {
    switch (i) {
        case 'select_towntalk':
            $(".select_towntalk_box").show();
            break;
        case 'select_author':
            $(".selection_box").show();
            break;
        default:
            $("#" + i + "").attr("placeholder", "")
            break;
    }
}

function loseFous(i) {
    if ($("#" + i + "").hasClass("enter") == true) {
        return;
    }
    $(".select_towntalk_box").hide();
    $(".selection_box").hide();

    if ($("#workbench_text_area").text() == "") {
        $("#workbench_text_area").attr("placeholder", '请输入正文(200字内包括标点符号),句尾请添加标点,不带空格,换行。')
    }
}

// 还可以输入多少字
function checkTxt() {
    var textLength = $('.text_area').val().length;
    $('#remaining_words_length').text(200 - textLength);
}


// 全局变量
var isRelease = false, // 用户是否点击发布按钮
    src = ""; // 用户上传图片地址

$(document).ready(function () {
    // 监听动态生成的有关话题，作者出处的内容，进入选择框内，
    $("body").on('mouseover', ".selection_box", function () {
        $("#select_author").addClass("enter");
    }).on('mouseout', ".selection_box", function () {
        $("#select_author").removeClass("enter");
    })

    $("body").on('mouseover', ".select_towntalk_box", function () {
        $("#select_towntalk").addClass("enter");
    }).on('mouseout', ".select_towntalk_box", function () {
        $("#select_towntalk").removeClass("enter");
    })




    // 监听参与话题输入框
    $("#select_towntalk").bind("input propertychange", function (event) {
        // 函数防抖，每300毫秒发生一次请求
        setTimeout(function () {
            console.log($("#select_towntalk").val())
            // getTowntalkData($("#select_towntalk").val())
        }, 300);
    });


    // 监听参与话题的选择，并填写在参与话题的输入框内
    $("body").on('click', ".select_towntalk_box .join_the_talk", function () {
        $("#select_towntalk").val("#" + $(this).find(".towntalk_title").text());
        $(".select_towntalk_box").hide()
    })

    // 监听用户输入话题后，若无话题，则创建话题
    $("body").on('click', ".select_towntalk_box .create_new_talk", function () {
        $(this).parent().find(".join_num").text("(1)")
        $("#select_towntalk").val("#" + $(this).parent().find(".towntalk_title").text());
        $(".select_towntalk_box").hide()
    })

    function getTowntalkData(value) {
        console.log(value)
        $.ajax({
            url: "",
            type: "",
            data: value,
            dataType: 'json',
            success: (res) => {},
            error: (err) => {}
        })

    }



    // 监听作者与出处输入框
    $("#select_author").bind("input propertychange", function (event) {
        // 函数防抖，每300毫秒发生一次请求
        setTimeout(function () {
            console.log($("#select_author").val())
            // getAuthorData($("#select_author").val())
        }, 300);
    });


    function getAuthorData(value) {
        console.log(value)
        $.ajax({
            url: "",
            type: "",
            data: value,
            dataType: 'json',
            success: (res) => {},
            error: (err) => {}
        })

    }


    // 监听朝代的选择
    $("#selA").change(function () {
        if ($("#selA option:selected").text() == '唐代') {
            $(".tuijian_neirong").empty();
            for (let i = 0; i <= 5; i++) {
                let li = `
                    <li>
                        《静夜思》
                      </li>
                     `;
                $(".tuijian_neirong").append(li)
            }
        }
    });

    // 监听作者的选择
    $("#selA").change(function () {
        if ($("#selB option:selected").text() == '李白') {
            $(".tuijian_neirong").empty();
            for (let i = 0; i <= 5; i++) {
                let li = `
                    <li>
                        《静夜思》
                      </li>
                     `;
                $(".tuijian_neirong").append(li)
            }
        }
    });


    // 监听用户选择的作者与出处，并填写在作者与出处的输入框内
    $("body").on('click', ".tuijian_neirong li", function () {
        $("#select_author").val($("#selB option:selected").text() + "/" + $(this).text().replace(/(^\s*)|(\s*$)/g, ""));
        $(".selection_box").hide()
    })




    function showTishi(valueText) {
        $("#mask_content_dislike").show();
        $("#mask_content_dislike .result_title").text(valueText);
        setTimeout(function () {
            $("#mask_content_dislike").hide();
        }, 2000);
    };

    $('.add_picture_input').change(function () {
        var file = this.files[0];



        // 上传的不图片返回
        if (file.type.search("image") == -1 || file.type == "") {
            showTishi("请上传图片类型文件！")
            $('.add_picture_input').val('');
            return;
        }

        // 图片大于多少返回
        if (file.size >= 5242880) {
            showTishi("请上传小于5MB的图片！")
            $('.add_picture_input').val('');
            return;
        }

        $(".content-img-list").css("display", "flex")
        src = getObjectURL(file);
        $(".add_img_item a").hide();
        $(".change_img").show();
        $(".change_img").attr("src", src)
        $('.add_picture_input').val('');
    })


    function getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) {
            url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)  
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome  
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }



    //提交按钮事件
    $("#submit_article_btn").click(function () {
        $("#submit_success").css("visibility", "visible");
        // $('body').css("overflow", "hidden");
        // $('html').css("overflow", "hidden");
        $("#mask").show();
        // let formData = new FormData();
        // formData.append("sex", $("input[name='sex']:checked").val());
        // formData.append("imgUrl", $("input[name='user_name']").val());
        // formData.append("phone", $("input[name='user_phone']").val());
        // formData.append("address", $("input[name='user_address']").val());
        // formData.append("qianming", $("input[name='user_qianming']").val());
        // $.ajax({
        //     url: "",
        //     type: "",
        //     data: formData,
        //     dataType: 'json',
        //     success: (res) => {
        //     },
        //     error: (err) => {
        //     }
        // }) 

        isRelease = true;

        setTimeout(function () {
            $("#submit_success").css("visibility", "hidden");
            $("#mask").hide();
            Reset()
            // $('body').css("overflow", "auto");
            // $('html').css("overflow", "auto");
        }, 3000);
    })



    //重置,清空输入框，清空剩余字数，删除图片，显示上传图片图标
    function Reset() {
        $("#workbench_text_area").val("");
        $("#select_towntalk").val("");
        $("#select_author").val("");
        $("#remaining_words_length").text("200")
        $(".add_img_item .iconicon-test").show();
        $(".add_img_item .change_img").hide();
        $(".change_img").attr('src', '');
    }

    // 作者选择
    $(".choice_box_author li").click(function () {
        $("#select_author_input").val($(this).text());
        $(".choice_box_author").hide();
    })

    // 出处选择
    $(".choice_box_source li").click(function () {
        $("#select_source_input").val($(this).text());
        $(".choice_box_source").hide();
    })





    function _getFocus(elem) {  
        var index = 0;  
        if (document.selection) {// IE Support  
            elem.focus();  
            var Sel = document.selection.createRange();  
            if (elem.nodeName === 'TEXTAREA') {//textarea  
                var Sel2 = Sel.duplicate();  
                Sel2.moveToElementText(elem);  
                var index = -1;  
                while (Sel2.inRange(Sel)) {  
                    Sel2.moveStart('character');  
                    index++;  
                };  
            }  
            else if (elem.nodeName === 'INPUT') {// input  
                Sel.moveStart('character', -elem.value.length);  
                index = Sel.text.length;  
            }  
        }  
        else if (elem.selectionStart || elem.selectionStart == '0') { // Firefox support  
            index = elem.selectionStart;  
        }  
        return (index);  
    }  

    // 自动保存事件
 
    // 监听输入框内容
    var user_write_article = '';
    $("#workbench_text_area").bind("input propertychange", function (event) {

        user_write_article = $("#workbench_text_area").val();
        if (user_write_article.indexOf('@') != -1) {
    
            console.log(user_write_article.indexOf('@'))


        }



    });

    // 如果没有点击发布按钮，页面离开就去发生请求保存数据
    window.onbeforeunload = function (event) {
        if (isRelease != true) {
            // event.returnValue = "我在这写点东西...";
            console.log(user_write_article)
            console.log($("#select_towntalk").val())
            console.log($("#select_author").val())
            console.log(src)
        }

    };
    // window.onpagehide = function(event) {
    //     if(isRelease != true){
    //           console.log(user_write_article)
    //           console.log($("#select_towntalk").val())
    //           console.log($("#select_author").val())
    //           console.log(src)
    //     }

    // };

})