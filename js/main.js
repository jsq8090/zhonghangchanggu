/**
 * Created by Administrator on 2018/7/19.
 */
$(function () {

    var navHeight=$('.navbar').height();
    var winHeight=$(window).height();
    var wrapperHeight=winHeight-navHeight;
    $('#wrapper').height(wrapperHeight);/*高度自适应*/

    setInterval(function () {
        time();
            },1000);
    function time() {
        function Appendzero (obj) {
            if (obj < 10) return "0" + obj; else return obj;
        }//时间自动补零

        function getDateWeek () {
            var now = new Date ();
            var year = now.getFullYear ();//获取四位数年数
            var month = now.getMonth () + 1;
            var data = now.getDate ();
            var hour = now.getHours ();
            var minute = now.getMinutes ();
            var second = now.getSeconds ();
            var s = year+'-'  + Appendzero (month)+'-'   + Appendzero (data) ;
            var t=Appendzero (hour) + ":" + Appendzero (minute) + ":" + Appendzero (second);
            $(".time").text(s);
            $(".time-hours").text(t);
        }

        getDateWeek ();

    }/*时钟*/

    top();
    skin();
    user();

    function skin(){
        $('.skin').click(function (e) {
            $('.user-text').fadeOut(300);
            $('.skin-text').fadeIn(300);
            event.stopPropagation();/*防止事件冒泡*/
        });
        $('body').click(function () {
            $('.skin-text').fadeOut(300);
            $('.user-text').fadeOut(300)
        });

        $('.blue').click(function () {
        $('.navbar').removeClass('nav-bg1');
        $('.navbar').addClass('nav-bg2');
        $('.sidebar').removeClass('bg-color1');
        $('.sidebar').addClass('bg-color2');
        });

        $('.black').click(function () {
            $('.navbar').removeClass('nav-bg2');
            $('.navbar').addClass('nav-bg1');
            $('.sidebar').removeClass('bg-color2');
            $('.sidebar').addClass('bg-color1');
        })
    }/*皮肤切换*/

    function user() {
        $('.user').click(function () {
            $('.skin-text').fadeOut(300);
            $('.user-text').fadeIn(300);
            event.stopPropagation();/*防止事件冒泡*/
        })/*账号操作*/

    }

    function top() {
        $('.skin-text').css({top:navHeight});

        $('.user-text').css({top:navHeight})

    }


    });