/**
 * Created by Administrator on 2018/7/21.
 */


var macid;
$(function () {
   $('.list').on('click',function () {
       var name=$(this).attr('id');
       htmlobj=$.ajax({url:"../admin/overview/"+name+".html",async:false});
       $("#show-text").html(htmlobj.responseText);
   });/* 平铺图切换*/
    $('.list1').on('click',function () {
        var name=$(this).attr('id');
        htmlobj=$.ajax({url:"../admin/"+name+".html",async:false});
        $("#show-text").html(htmlobj.responseText);
    });/* 平铺图切换*/
    $('.link').on('click',function () {
        var name=$(this).attr('id');
        $("#main").html('<iframe frameborder="0" style="width: 100%; height:100%;"'+'src="'+"../admin/overview/"+name+'.html"'+'>'+'</iframe>');
    });/*子页面加载*/

    $('.FengJiState').dblclick(function () {
        macid=$(this).find("p").text();
        console.log(macid);
        $("#main").html('<iframe frameborder="0" style="width: 100%;height:100%;"'+'src="'+"../admin/overview/"+'content'+'.html"'+'>'+'</iframe>');
    });/*双击打开详情页面*/
    $('.FengJiState').mousemove(function () {
        $(this).css(
            "box-shadow","0px 0px 8px #00C9F1"
        );
    });
    $('.FengJiState').mouseout(function () {
        $(this).css(
            "box-shadow","none")
    });/*鼠标覆盖效果*/


});