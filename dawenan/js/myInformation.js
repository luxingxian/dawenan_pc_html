        //图像上传
        function selectImg(file) {
            if (!file.files || !file.files[0]) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (evt) {
                var replaceSrc = evt.target.result;
                //更换cropper的图片
                $('#tailoringImg').cropper('replace', replaceSrc, false); //默认false，适应高度，不失真
            }
            reader.readAsDataURL(file.files[0]);
        }
              //关闭裁剪框
              function closeTailor() {
                $(".tailoring-container").toggle();
            }


        $(document).ready(function () {
            // 全局变量
            var select_inpunt_value = "",
            base64url="";
            // 默认数据
            function morenData() {
                $("input[id='sex_man']").attr('checked', true)
                $("input[name='user_name']").val("啦啦啦，我是卖报的小行家")
                $("input[name='user_phone']").val("666688888")
                $("input[name='user_address']").val("河南商丘")
                $("input[name='user_qianming']").val("大文案，为您提供优质文案")
            }

            morenData()



            // 更换头像逻辑

            $("#changeImg").on("mouseover ",function(){
                $("#changeImg .change_user_head").show()
            }).on("mouseout ",function(){
                $("#changeImg .change_user_head").hide()
            })


            //弹出图片裁剪框
            $("#changeImg").on("click", function () {
                $(".tailoring-container").toggle();
            });

            //cropper图片裁剪
            $('#tailoringImg').cropper({
                aspectRatio: 1 / 1, //默认比例
                preview: '.previewImg', //预览视图
                guides: true, //裁剪框的虚线(九宫格)
                autoCropArea: 0.8, //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
                movable: false, //是否允许移动图片
                dragCrop: true, //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
                movable: true, //是否允许移动剪裁框
                resizable: true, //是否允许改变裁剪框的大小
                zoomable: true, //是否允许缩放图片大小
                mouseWheelZoom: true, //是否允许通过鼠标滚轮来缩放图片
                touchDragZoom: true, //是否允许通过触摸移动来缩放图片
                rotatable: true, //是否允许旋转图片
                crop: function (e) {
                    // 输出结果数据裁剪图像。

                }
            });
            //旋转
            $(".cropper-rotate-btn").on("click", function () {
                $('#tailoringImg').cropper("rotate", 45);
            });
            //复位
            $(".cropper-reset-btn").on("click", function () {
                $('#tailoringImg').cropper("reset");
            });
            //换向
            var flagX = true;
            $(".cropper-scaleX-btn").on("click", function () {
                if (flagX) {
                    $('#tailoringImg').cropper("scaleX", -1);
                    flagX = false;
                } else {
                    $('#tailoringImg').cropper("scaleX", 1);
                    flagX = true;
                }
                flagX != flagX;
            });

            //裁剪后的处理
            $("#sureCut").on("click", function () {
                if ($("#tailoringImg").attr("src") == null) {
                    return false;
                } else {
                    var cas = $('#tailoringImg').cropper('getCroppedCanvas'); //获取被裁剪后的canvas
                    base64url = cas.toDataURL('image/png'); //转换为base64地址形式
                    $("#finalImg").prop("src", base64url); //显示为图片的形式
                     console.log(base64url)
                    //关闭裁剪框
                    closeTailor();
                }
            });
            $("#closeCut").on("click", function () {
                 closeTailor();
            });
      
            $('.information_input').on('focus', function () {
                select_inpunt_value = $(this).val();
                $(this).val("")
            })
            //输入框失去焦点时
            $(".information_input").on('blur', function () {
                if ($(this).val() == "") {
                    $(this).val(select_inpunt_value)
                }
            })




            // 提交数据

            $("#submitData").click(function () {
                var formData = new FormData();

                formData.append("sex", $("input[name='sex']:checked").val());
                formData.append("name", $("input[name='user_name']").val());
                formData.append("phone", $("input[name='user_phone']").val());
                formData.append("address", $("input[name='user_address']").val());
                formData.append("qianming", $("input[name='user_qianming']").val());
                // console.log(formData.get('sex'))
                // console.log(formData.get('name'))
                // console.log(formData.get('phone'))
                // console.log(formData.get('address'))
                // console.log(formData.get('qianming'))
                // var str="性别："+formData.get('sex')+",账号昵称："+ formData.get('name')+",手机号为："+formData.get('phone')+",所属地区："+ formData.get('address')+",个性签名："+ formData.get('qianming')+"";
                // alert("您提交的数据为:"+ str+"")
                // $.ajax({
                //     url: "https://xx.php",
                //     type: "post",
                //     data: data,
                //     dataType: 'json',
                //     success: (res) => {
                //     },
                //     error: (err) => {
                //     }
                // })
                $("#mask_content_dislike").show();
                setTimeout(function() {
                    $("#mask_content_dislike").hide();
                }, 1000);
            })





        });