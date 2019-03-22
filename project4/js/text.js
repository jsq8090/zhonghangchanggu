/**
 * Created by Administrator on 2018/7/7.
 */
$(function () {

    $('.btn1').click(function () {
        var name=$('.btn1').attr('name') ;
        console.log(name);
        var min=$('#p2').val();
        var max=$('#p3').val();
        if(min==""||max==''){
            alert('输入值不可为空');
            return 0
        }
        if(min>max){
          alert('最小量程不可大于最大量程')
            return 0

        }
    });//量程值获取

    $('.btn2').click(function(){

    var num=$('.select option').attr('value')//获取下拉框字段
        console.log(num);
        var a=$('#p4').val();
        var b=$('#p5').val();
        var c=$('#p6').val();
        var d=$('#p7').val();
        var e=$('#p8').val();
        if(a==''||b==''||c==''||d==''){

          alert('文本框不可为空')
            return 0

        }

    console.log(a+b+c+d)

    })


})
