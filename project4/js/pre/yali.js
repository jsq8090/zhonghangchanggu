/**
 * Created by Administrator on 2018/5/2.
 */
var nums=[];
var y=[];
var t;
var myChart2 = echarts.init(document.getElementById('pressure'));
$(function () {
    function time()
    {
        dt = new Date();
        var Y=dt.getFullYear();
        var M=dt.getMonth()+1;
        var D=dt.getDate();
        var h=dt.getHours();
        var m=dt.getMinutes();
        t=Y+"/"+M+"/"+D;
        return times=h+":"+m;

    }
    time();
    setInterval(function(){

        time();
        var h=Math.random()*10+5;
        nums.push(times);
        var a=nums[nums.length-1];
        y.push(h);
        if (nums.length>10){
            nums.shift();
            y.shift();
        }

        myChart2.setOption({

            xAxis: {
                data: nums
            },

            series: [{
                name: '压力值',
                type: 'line',
                data: y,
                smooth:true

            }]
        });
    },4000);




// 基于准备好的dom，初始化echarts实例


// 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        title: {
            text:'进口压力',
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
        grid: {
            left: '6%',
            top:'15%',
            containLabel: true
        },
        toolbox: {
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
                /*magicType: {
                 type: ['line',
                 'bar']//类型切换
                 }*/
            }
        },//控件
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
            formatter:"时间"+":"+'{b0}'+"</br>"+'{a0}:{c0}'+'℃'
        },

        xAxis: {
            splitLine: {
                show: true
            },
            type:'category' ,
            data:[16+':'+20+':'+30,16+':'+20+':'+33,16+':'+20+':'+36,16+':'+20+':'+39]
        },
        yAxis: {
            splitLine: {
                show: true
            }
        },
        visualMap: {
            show: false,
            dimension: 1,
            pieces: [],  //pieces的值由动态数据决定
            outOfRange: {
                color: 'black'
            }
        },
        series: [{
            name: '压力值',
            type: 'line',
            data: [1,8,9,13],
            /*markPoint: {
             data: [
             {type: 'max', name: '最大值'},
             {type: 'min', name: '最小值' }
             ]},*/

            markLine:{
                data:[
                    {type:'average',name:'平均值'}

                ]


            }


        }]
    };  // 使用刚指定的配置项和数据显示图表。
    option.visualMap.pieces[0] = {gte: 0, lte: 11, color: 'green'};
    option.visualMap.pieces[1] = {gte: 11, lte: 16, color: 'yellow'};
    option.visualMap.pieces[2] = {gte: 16, lte: 18, color: 'red'};
    myChart2.setOption(option);
});
window.onresize = function(){
    myChart2.resize();
};