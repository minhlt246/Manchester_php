window.onload = function () {
    var option = {
        grid:{
            horizontal:{
                style: 'solid',
            },
            vertical:{
                style: 'solid',
            }
        },
        xAxis:{
            axisLine:{
                show:false,
                // color: '#ffffff1a',
            }
        },
        yAxis:{
            axisLine:{
                show:false,
                // color: '#ffffff1a',
            }
        }
    }

    var chart = klinecharts.init('chart', option)

    chart.createTechnicalIndicator('MA', false, {
        id: 'candle_pane',
    })

    var chartDataList = kLineDataList.map(function (data) {
        return {
            timestamp: new Date(data[0]).getTime(),
            open: +data[1],
            high: +data[2],
            low: +data[3],
            close: +data[4],
            volume: Math.ceil(+data[5]),
        }
    })
    chart.applyNewData(chartDataList)

}
