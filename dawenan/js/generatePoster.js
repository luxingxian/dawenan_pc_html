$(document).ready(function () {
    $('.user_generate_time .generate_time').text(new Date().toLocaleDateString())

        function toImg(imgDIv) {
            var w = imgDIv.width();
            var h = w/(1080/2337);  
            var times = 1080/w;
            var canvas = document.createElement("canvas");
            canvas.width = w * times;//要将 canvas 的宽高设置成容器宽高的times倍
            canvas.height = h * times;
            canvas.style.width = w  + "px";
            canvas.style.height = h  + "px";
            var context = canvas.getContext("2d"); //然后将画布缩放，将图像放大n倍画到画布上  
            context.scale(times, times);
            var rect = imgDIv.get(0).getBoundingClientRect();//获取元素相对于视察的偏移量
            console.log(rect)
            context.translate(-rect.left-8.4,-rect.top+0.5);//设置context位置，值为相对于视窗的偏移量负值，让图片复位
            html2canvas(imgDIv, {
                canvas: canvas,
                dpi: window.devicePixelRatio*2,
                onrendered: function(canvas) {
                    var dataUrl = canvas.toDataURL("image/png",1);
                    var imgPownload = document.createElement('a');
                    imgPownload.setAttribute("download", 'share.png');
                    imgPownload.href = dataUrl;
                    imgPownload.click();
                }
            });
        }
        

    $(".generate_poster_left_foot").click(function () {
        toImg($('#screenshot_area'));
    });



//中英翻译
function wordTranslation(query){
	var appid = '20200713000518403';
	var key = 'qZ7LVFE7wa6URmkJ3J3f';
	var salt = (new Date).getTime();
	var query = query;
	// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
	var str1 = appid + query + salt +key;
	var sign = MD5(str1);
	$.ajax({
	    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
	    type: 'get',
	    dataType: 'jsonp',
	    data: {
	        q: query,
	        appid: appid,
	        salt: salt,
	        from: "zh",
	        to: "en",
	        sign: sign
	    },
	    success: function (data) {
				$('.English_text').html(data.trans_result[0].dst)
	    } 
	});
}





    // 更换模板
    var templateBtn = $(".template");
    $(templateBtn).click(function () {
        for (let i = 0; i < templateBtn.length; i++) {
            $(templateBtn[i]).find("span").removeClass("select_icon");
        }
        $(this).find("span").addClass("select_icon");
        switch ($(this)[0].className) {
            case 'template_two template':
                $("#screenshot_area").removeClass("no_tem_background");
                $("#screenshot_area").addClass("template_two_background");
                $("#screenshot_area").removeClass("template_one_background");
                $(".chinese_text_two").html("要是爱你爱的少些，话就可以说的多些了。")
                wordTranslation($(".chinese_text_two").text())
                break;
            case 'template_one template':
                $("#screenshot_area").removeClass("no_tem_background");
                $("#screenshot_area").removeClass("template_two_background");
                $("#screenshot_area").addClass("template_one_background");
                $(".chinese_text").html("我之所以会赌你明白这么多的事情，是因为我相信你。<br> 这个年代，相信比爱，还要珍贵上那么一点。<br> 我知道你也相信我，<br> 所以我把心掏出来给你看，<br>毫无保留。")
                break;
            case 'template_no template':
                $("#screenshot_area").removeClass("template_one_background");
                $("#screenshot_area").removeClass("template_two_background");
                $("#screenshot_area").addClass("no_tem_background");
                $(".chinese_text").html("我之所以会赌你明白这么多的事情，是因为我相信你。<br> 这个年代，相信比爱，还要珍贵上那么一点。<br> 我知道你也相信我，<br> 所以我把心掏出来给你看，<br>毫无保留。")
                break;
            default:
              
                break;
        }
    });




    // 默认显示用户信息,日期
    $("#userMessage").attr("checked", 'checked');
    $("#createTime").attr("checked", 'checked');



    // 是否显示用户信息
    $("#userMessage").click(function () {
        console.log($(this).is(':checked'))
        if ($(this).is(':checked') == true) {
            $(".user_head_box").show()
        } else {
            $(".user_head_box").hide();
        }
    });

    // 是否显示日期
    $("#createTime").click(function () {
        console.log($(this).is(':checked'))
        if ($(this).is(':checked') == true) {
            $(".user_generate_time").show()

        } else {
            $(".user_generate_time").hide()
        }
    });

     
    //选择系统推荐的图片

    $('body').on('click','.change_img_box  a',function () {
        console.log($(this))
        for (let i = 0; i < $(".change_img_box  a").length; i++) {
            $($(".change_img_box  a")[i]).find("span").removeClass("select_icon");
            $($(".change_img_box  a")[i]).find("img").removeClass("select_img");
        }
        // 排除,上传图片按钮
        if ($(this).attr("id") == "select_other") {
            return;
        }

        $(this).find("span").addClass("select_icon");
        $(this).find("img").addClass("select_img");
        $(".generate_poster_img").attr("src", $(this).find("img").attr("src"))
    })


    $('#add_other_img').change(function () {
        var file = this.files[0];
        if (window.FileReader) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function (e) {
                let src = e.target.result,
                    add_picture_template = `
                <a class='imghs'>
                <img src="${src}" alt="">
                <span class="iconfont iconsanjiaoxuanzhong"></span>
                </a>`;
                $("#select_other").before(add_picture_template);
                $(".generate_poster_img").attr("src", src)
            };
        }


    });


});