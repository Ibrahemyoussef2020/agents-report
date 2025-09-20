import isValidChart from './checkIsChartValuesValid';


export function handleChartLine(chart,commonOptions,showToolbar){
    if (isValidChart(chart.series, "line")) {
        return {
            ...commonOptions,
            stroke: {
                curve: "straight",
            },
        };
    } else {
        return null;
    }
}

////////////////

export function handleChartBar(chart,commonOptions,showToolbar){
    if (isValidChart(chart.series, "bar")) {
        return {
            ...commonOptions,
            yaxis: {
                title: {
                    text: typeof(chart?.title?.text) === 'string' ? chart?.title : chart?.title?.text,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
        };
    } else {
        return null;
    }
}

/////////////////

export function handleChartPie(chart,commonOptions,showToolbar){
    if (isValidChart(chart.series, "pie")) {
        return {
            chart: {
                type: "pie",
            },
            labels: chart.labels || [],
            colors: commonOptions.colors,
        };
    } else {
        return null;
    }
}


////////////////////////

export function handleChartDount(chart,commonOptions,showToolbar){
    if (isValidChart(chart.series, "donut")) {
        return {
            chart: {
                type: "donut",
            },
            labels: chart.labels || [],
            colors: commonOptions.colors,
        };
    }else{
        return null
    }
}


//////////////////////////

export function handleChartRadar(chart,commonOptions,showToolbar){
    if (isValidChart(chart.series, "radar")) {
        return {
            chart: {
                type: "radar",
                toolbar: {
                    show: showToolbar, 
                },
            },
            xaxis: {
                categories: chart.xaxis?.categories || [],
            },
            stroke: {
                width: 2,
            },
            fill: {
                opacity: 0.2,
            },
        };
    }
    else{
        return null
    }
}

////////////////////////

export function handleChartRangeBar(chart,commonOptions,showToolbar){

    return {
        chart: {
            type: "rangeBar",
            toolbar: {
                show: showToolbar,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true, 
            },
        },
        xaxis: {
            type: "datetime", 
            labels: {
                format: "dd/MM",
            },
        },
    
    }
}

////////////////

export function handleChartScatter(chart,commonOptions,showToolbar){
    if (isValidChart(chart.series, "scatter")) {
        const { data } = chart.series[0]; 

        const transformToScatterData = (data) => {
            return data.map(([x, y]) => ({ x, y }));
        };

        const transformedData = transformToScatterData(data);

        if (transformedData && transformedData?.length) {
            return {
                ...commonOptions,
                chart: {
                    type: "scatter",
                },
                series: [
                    {
                        name: chart.series[0].name,
                        data: transformedData,
                    },
                ],
                xaxis: {
                    type: "numeric",
                },
                yaxis: {
                    title: {
                        text: "Y-Axis",
                    },
                },
            };
        } else {
            return null;
        }

    } else {

        return null;
    }
}
