// based on prepared DOM, initialize echarts instance
var myChart = echarts.init( document.getElementById( 'js-chart-line-1' ) );

var option = {
    title: {
        text: 'Chart lines'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Januray', 'February', 'March', 'April', 'May']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Januray', 'February', 'March', 'April', 'May']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Errors',
            type: 'line',
            stack: 'One',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Purchases',
            type: 'line',
            stack: 'One',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Schedulues',
            type: 'line',
            stack: 'One',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Pages',
            type: 'line',
            stack: 'One',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Visits',
            type: 'line',
            stack: 'One',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);