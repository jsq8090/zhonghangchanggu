/**
 * Created by Administrator on 2018/6/1.
 */
var dom0 = document.getElementById("gauge");
var wendu= echarts.init(dom0);
var app = {};

var name;
option0 = {
    backgroundColor:'',
    tooltip : {
        formatter: "{a}:{c}℃"
    },

    series : [
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['10%','25%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'主轴前轴承温度'}]
        },
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['30%','25%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'主轴后轴承温度'}]
        },
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['50%','25%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'从轴前轴承温度'}]
        },
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['70%','25%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'从轴后轴承温度'}]
        },
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['90%','25%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'主油箱温度'}]
        },//第一排结束




        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['10%','70%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'副油箱温度'}]
        },
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['30%','70%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'进口温度'}]
        },
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['50%','70%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'出口温度'}]
        },
        {
            name:'温度',
            type:'gauge',
            min:0,
            max:150,
            center:['70%','70%'],
            splitNumber:5,
            radius: '32%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.14, '#fff'],[0.82, '#0d0d0d'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : 'black', //默认透明
                    shadowBlur:8
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#0d0d0d',
                    fontSize:8,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#0d0d0d',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            itemStyle:{
                color:'#030307'
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
            data:[{value: 40,name:'油站温度'}]
        }
    ]
};
wendu.on('click',function(params){
    name = params.name;

    //你的具体逻辑流程
    myChart1.setOption({
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
    option0.series[0].data[0].value =(Math.random()*100).toFixed(2) - 0;
    option0.series[1].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option0.series[2].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option0.series[3].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option0.series[4].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option0.series[5].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option0.series[6].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option0.series[7].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option0.series[8].data[0].value = (Math.random()*100).toFixed(2) - 0;

    wendu.setOption(option0);
},2000)//仪表数据接口
;
if (option0 && typeof option0 === "object") {
    wendu.setOption(option0, true);
}

window.onresize = function(){
    wendu.resize();
}
