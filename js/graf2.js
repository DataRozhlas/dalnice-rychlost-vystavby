Highcharts.chart('graf2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Počet úkonů potřebných pro vyřízení stavebního povolení'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    xAxis: {
        categories:   ["Dánsko", "Kypr", "Černá hora", "Švédsko", "Francie", "Německo", "Británie", "Slovensko", "Belgie", "Irsko", "Estonsko", "Ukrajina", "Rakousko", "Lucemnursko", "Norsko", "Srbsko", "Makedonie", "Gruzie", "Itálie", "Polsko", "Nizozemsko", "Švýcarsko", "Litva", "Slovinsko", "Lotyšsko", "Portugalsko", "Rusko", "Izrael", "Španělsko", "Malta", "Kosovo", "San Marino", "Bosna a Hercegovina", "Bělorusko", "Albánie", "Island", "Finsko", "Chorvatsko", "Řecko", "Turecko", "Bulharsko", "Kazachstán", "Arménie", "Maďarsko", "Ázerbájdžán", "Česko", "Rumunsko", "Moldávie"],
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
          enabled: false     
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: true,
        text: 'Zdroj: Světová banka',
        href: 'http://www.doingbusiness.org/content/dam/doingBusiness/media/Annual-Reports/English/DB2018-Full-Report.pdf'
    },
    series: [{
        name: 'počet úkonů',
        data: [7,8,8,8,9,9,9,10,10,10,10,10,11,11,11,11,11,11,12,{y:12,color:"#c91b12"},13,13,13,14,14,14,14,15,15,15,15,15,16,16,17,17,17,18,18,18,18,19,19,20,21,{y:21, color:"#c91b12"},24,28],
        color: '#315389'
    }]
});