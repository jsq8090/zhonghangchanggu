/**
 * Created by Administrator on 2018/5/2.
 */
var nums=[];
var y=[];
var t;
var myChartr = echarts.init(document.getElementById('resistance'));
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

        myChart3.setOption({

            xAxis: {
                data: nums
            },

            series: [{
                name: '振动值',
                type: 'line',
                data: y,
                smooth:true

            }]
        });
    },4000);




// 基于准备好的dom，初始化echarts实例


// 指定图表的配置项和数据
    var option = {
        title: {
            text: '信号量'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['Step Start', 'Step Middle', 'Step End']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'Step Start',
                type:'line',
                step: 'start',
                data:[120, 132, 101, 134, 90, 230, 210]
            }


        ]
    };

    myChartr.setOption(option);
});
window.onresize = function(){
    myChartr.resize();
}