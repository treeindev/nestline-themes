// based on prepared DOM, initialize echarts instance
var destination = document.getElementById('js-chart-pie-1');
var myChart = echarts.init( destination );

var option = {
    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: 'Title here',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: 'Firefox'},
                {value: 310, name: 'Safari'},
                {value: 274, name: 'Chrome'},
                {value: 235, name: 'Opera'},
                {value: 400, name: 'Edge'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            labelLine: {
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);