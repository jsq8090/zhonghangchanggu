/**
 * Created by Administrator on 2018/6/6.
 */
/**
 * Created by Administrator on 2018/5/2.
 */



var myChart4 = echarts.init(document.getElementById('vibration0'));
$(function () {

    setInterval(function(){



    },4000);




// 基于准备好的dom，初始化echarts实例


// 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        title: {
            text:'振动图',
            left: 50,
            top:10,
            textStyle: {
                color:'#0d0d0d',
                fontSize:18,
                fontFamily: 'Arial'

            },
            subtextStyle:{
                fontSize:13


            }
        },//标题

        /* toolbox: {
            right:16,
            show: true,
            feature: {
                dataView: {
                    show: true
                },//数据视图
                restore: {
                    show: true
                },//还原

                saveAsImage: {
                    show: true
                }//保存图片
                magicType: {
                 type: ['line',
                 'bar']//类型切换
                 }
            }
        },//控件*/
        /*dataZoom: [
         {
         type: 'slider',    //支持鼠标滚轮缩放
         start: 0,            //默认数据初始缩放范围为10%到90%
         end: 100
         },
         {
         type: 'inside',    //支持单独的滑动条缩放
         start: 0,            //默认数据初始缩放范围为10%到90%
         end: 100
         }
         ],*/
        tooltip: {
            trigger:'axis',
            formatter:'{b0}'+"</br>"+'振动值'+'{c0}'+'mm/ s '

        },


            xAxis: {
                type: 'category',
                data: ['x向振动', 'y向振动', 'z向振动']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150],
                type: 'bar',
                barWidth: '10%'
            }]


};  // 使用刚指定的配置项和数据显示图表。
    myChart4.on('click',function(params){
        name = params.name;
        //你的具体逻辑流程
        myChart3.setOption({
            title: {
                text: name,
                left: 50,
                top: 10,
                textStyle: {
                    color: '#0d0d0d',
                    fontSize: 18,
                    fontFamily: 'Arial'

                },
                subtextStyle: {
                    fontSize: 13


                }
            }//标题
        });
        console.log(name)
    });//图形点击事件
    myChart4.setOption(option);
});
window.onresize = function(){
    myChart4.resize();
}