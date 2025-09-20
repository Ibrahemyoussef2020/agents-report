import { useRoute } from "vue-router";

import {
handleChartLine,
handleChartBar,
handleChartPie,
handleChartDount,
handleChartRadar,
handleChartRangeBar,
handleChartScatter,
} from './handle-type-charts'

export const useChartOptions = () => {
	const route = useRoute(); 
	

	const getChartOptions = (chart) => {

		const showToolbar = true;
		const commonOptions = {
			chart: {
				type: chart.type,
				toolbar: {
					show: showToolbar, 
				},
			},
			xaxis: {
				categories: chart.xaxis?.categories || [],
			},
			colors: [
				"#68d2d3",
				"#ed30e5",
				"#1e7be7",
				"#915eff",
				"#fdcc70",
				"#17e942",
			],
		};

		if (chart.type === "line") return handleChartLine(chart,commonOptions,showToolbar) 

		else if (chart.type === "bar") return handleChartBar(chart,commonOptions,showToolbar)

		else if (chart.type === "pie") return handleChartPie(chart,commonOptions,showToolbar)
		
		else if (chart.type === "donut") return handleChartDount(chart,commonOptions,showToolbar)
		
		else if (chart.type === "radar") return handleChartRadar(chart,commonOptions,showToolbar)

		else if (chart.type === "rangeBar") return handleChartRangeBar(chart,commonOptions,showToolbar)					

		else if (chart.type === "scatter") return handleChartScatter(chart,commonOptions,showToolbar) 
		
		return commonOptions;
	};

	return { getChartOptions };
};

