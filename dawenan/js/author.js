$(document).ready(function () {

    $(".text  .show_more").click(function () {
        if ($(this).text() == '展开全文') {
            $(this).text("收起")
        } else {
            $(this).text("展开全文")
        }
        $(this).parent().find(".text_box").toggleClass("text_box_show_more");
    })


});