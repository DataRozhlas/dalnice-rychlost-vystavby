
Highcharts.chart('graf3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Délky dálnic zprovozněné v letech 1971–2018'
    },
    subtitle: {
        text: 'Graf obsahuje i úseky bývalých rychlostních silnic, které nebyly zařazeny k 1. 1. 2016 do sítě dálnic; červeně roky, kdy byl ministrem dopravy Dan Ťok'
    },
    yAxis: {
        title: {
            text: 'kilometry dálnic v provozu'
        }
    },
    credits: {
        text: 'Zdroje dat: NKÚ a ŘSD',
        href: 'https://nku.cz/assets/kon-zavery/K17005.pdf'
    },
    tooltip: {
        valueSuffix: 'km'
    },
    plotOptions: {
        series: {
            pointStart: 1971,
            dataLabels: {
                enabled: true
            }        
        }
    },

    series: [{
        name: 'délka zprovozněných dálnic',
        data: [23,15,22,13,26,28,71,37,42,78,25,17,26,43,36,19,2,16,16,28,9,5,30,1,25,35,71,13,14,7,23,4,28,22,17,78,46,46,59,52,16,11,40,{y:0, color:'#c91b12'},{y:5, color:'#c91b12'},{y:16, color: '#c91b12'},{y:17, color: '#c91b12'},{y:4, color: '#c91b12'}],
        color: '#315389'
    }]

});