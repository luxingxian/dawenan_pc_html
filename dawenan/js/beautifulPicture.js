$(document).ready(function () {
    $.ajax({
        url: 'http://www.mhweb.top/api/suiji',
        type: 'get',
        dataType: 'json',
        // data: {
        //     q: query,
        //     appid: appid,
        //     salt: salt,
        //     from: "zh",
        //     to: "en",
        //     sign: sign
        // },
        success: function (data) {
            var imgs = $(".beaytiful_picture_card  img");
            for (let i = 0; i < imgs.length; i++) {
                $(imgs[i]).attr('src', data[i].imgurl)
            }
        },
    });
   
   
    var currentPageId = 1,
        totalNum = 400; //总数据量。默认长度为0. 注意，是数据条目总数，不是分页总数。
    if (/page/.test(location.href)) {
        // $(window).scrollTop($('#testPage').offset().top);
        currentPageId = location.href.split('page=')[1].split(/\D/g)[0];
    }
    new Pagination($('#testPage'), {
        length: totalNum, //总数据量。默认长度为0. 注意，是数据条目总数，不是分页总数。
        //every:	15,          //每页显示的条目数
        current: currentPageId, //当前页码数。默认是选中第一页
        href: function (current) { //跳转方式，a链接
            return '?page=' + current;
        }
    });






});