$(document).ready(function() {
    var currentPageId = 1,
    totalNum=400;    //总数据量。默认长度为0. 注意，是数据条目总数，不是分页总数。
if (/page/.test(location.href)) {
    // $(window).scrollTop($('#testPage').offset().top);
    currentPageId = location.href.split('page=')[1].split(/\D/g)[0];
}
new Pagination($('#testPage'), {
    length: totalNum, 	  //总数据量。默认长度为0. 注意，是数据条目总数，不是分页总数。
    every:	15,          //每页显示的条目数
    current: currentPageId,   //当前页码数。默认是选中第一页
    href: function(current) {        //跳转方式，a链接
        return '?page=' + current;
    }
});

    var sosoResultMenu = $(".soso_result_classification_menu li");
    $(sosoResultMenu).click(function() {
        $("html,body").scrollTop(0);
  
        for (let i = 0; i < sosoResultMenu.length; i++) {
            $(sosoResultMenu[i]).removeClass("colorActive")
        }
        $(this).addClass("colorActive");
        $(".soso_result").hide();
        switch ($(this).text()) {
            case '文案':
                $("#soso_result_article").show()
                break;
            case '话题':
                $("#soso_result_towmtalk").show()
                break;
            case '用户':
                $("#soso_result_user").show()
                break;

            default:
                break;
        }
    })
    $(".follow").click(function() {
        $(this).removeClass("follow");
        $(this).addClass("followed")
        $(this).text("已关注")
    })





});

  