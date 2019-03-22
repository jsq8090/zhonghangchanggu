/**
 * Created by Administrator on 2018/6/27.
 */
var dom = document.getElementById("record");
var myChartRecord = echarts.init(dom);


var c=[];
var data = [];

var a='black';
optionRecord = {

    toolbox: {
        right: 16,
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
            /*magicType: {
             type: ['line',
             'bar']//类型切换
             }*/
        }
    },//控件
    dataZoom: [
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
    ],
    xAxis: {

        type:'category' ,
        splitLine: {
            show: true
        },
        data:[6,7,8,9,19]

    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: true
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        data:[1,2,2,4,9],
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: a,
                lineStyle: {
                    color: '#00FF00'
                }

            }
        },
        markPoint:{
            data : c

        }

    }]
};/*数据存放*/
myChartRecord.on('click',function(params){
var a=params.name;
var b=params.data;
c.push({value: b, xAxis:a, yAxis: b});
    myChartRecord.setOption({
        series: [{
            markPoint: {
                data: c  //通过yAxis来控制markPoint的位置
            }
        }]
    }
)
    });/*图表点击事件*/




if (optionRecord && typeof optionRecord === "object") {
    myChartRecord.setOption(optionRecord, true);
}
window.onresize = function(){
    myChartRecord.resize();
}