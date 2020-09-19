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


    $.getJSON("http://www.mhweb.top/api/suiji?callback=",
    function(data) {
    var imgurls= $(".towntalk_box img");
     for(let i=0;i<data.length;i++){
        $(imgurls[i]).attr('src',data[i].imgurl)
     }
    })





    

});

  