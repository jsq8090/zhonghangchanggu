/**
 * Created by Administrator on 2018/6/28.
 */
$(function(){
    $(".link").click(function(){
      var name=$(this).attr('id');
          htmlobj=$.ajax({url:"../admin/"+name+".html",async:false});
        $("#main").html(htmlobj.responseText);

    });

});