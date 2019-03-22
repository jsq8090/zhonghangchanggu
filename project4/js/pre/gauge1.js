/**
 * Created by Administrator on 2018/6/2.
 */
var dom1 = document.getElementById("gauge1");
var yali = echarts.init(dom1);
var app = {};

var name;
option1 = {
    backgroundColor: '',
    tooltip : {
        formatter: "{a}:{c}kpa"

    },

    series : [
        {
            name:'压力',
            type:'gauge',
            min:0,
            max:90,
            center:['42%','40%'],
            splitNumber:2,
            radius: '35%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#8E8E8E	'],[0.82, 'black'],[1, '#6495ED']],
                    width: 4,
                    shadowColor : 'black', //默认透明
                    shadowBlur:5
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:10,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :8,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :11,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'blue'
            },
            pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                width:5
            },
            title:{
                offsetCenter: [0, '130%'],
                fontSize:13

            },

            detail : {
                backgroundColor: 'black',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '80%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight:5,
                    fontSize: 12,
                    color: '#fff'
                }
            },
            data:[{value: 40,name:'进口压力'}]
        },
        {
            name:'压力',
            type:'gauge',
            min:0,
            max:90,
            center:['20%','40%'],
            splitNumber:2,
            radius: '35%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#8E8E8E	'],[0.82, 'black'],[1, '#6495ED']],
                    width: 4,
                    shadowColor : 'black', //默认透明
                    shadowBlur:5
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:10,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :8,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :11,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'blue'
            },
            pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                width:5
            },
            title:{
                offsetCenter: [0, '130%'],
                fontSize:13

            },

            detail : {
                backgroundColor: 'black',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '80%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight:5,
                    fontSize: 12,
                    color: '#fff'
                }
            },
            data:[{value: 40,name:'出口压力'}]
        },
        {
            name:'压力',
            type:'gauge',
            min:0,
            max:90,
            center:['64%','40%'],
            splitNumber:2,
            radius: '35%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#8E8E8E	'],[0.82, 'black'],[1, '#6495ED']],
                    width: 4,
                    shadowColor : 'black', //默认透明
                    shadowBlur:5
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:10,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :8,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :11,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'blue'
            },
            pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                width:5
            },
            title:{
                offsetCenter: [0, '130%'],
                fontSize:13

            },

            detail : {
                backgroundColor: 'black',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '80%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight:5,
                    fontSize: 12,
                    color: '#fff'
                }
            },
            data:[{value: 40,name:'油站油压'}]
        }
    ]

};
yali.on('click',function(params){
    name = params.name;
    //你的具体逻辑流程
    myChart2.setOption({
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
setInterval(function (){
        option1.series[0].data[0].value =(Math.random()*100).toFixed(2) - 0;
        option1.series[1].data[0].value = (Math.random()*100).toFixed(2) - 0;
        option1.series[2].data[0].value = (Math.random()*100).toFixed(2) - 0;
   yali.setOption(option1);
},2000);//仪表数据接口

if (option1 && typeof option1 === "object") {
    yali.setOption(option1, true);
}
window.onresize = function(){
    yali.resize();
};