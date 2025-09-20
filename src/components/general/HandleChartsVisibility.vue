<template>
	<v-card
		class="mb-3"
		variant="flat"
		v-for="(chart, key) in charts"
		:key="key"
		v-bind="$attrs"
	>
		<h6 v-if="chart?.title" class="text-grey-darken-3 mt-3">
			{{
				typeof chart?.title === "string"
					? chart?.title
					: chart?.title?.text
			}}
		</h6>

		<apexchart
			v-if="
				chart?.type &&
				chart.series?.length &&
				getChartOptions(chart) &&
				chart.type !== 'rangeBar'
			"
			:type="chart?.type"
			:series="chart?.series"
			:options="getChartOptions(chart)"
			height="250"
			:id="`apexChart${key}`"
			:title="`${chart?.time_id}` || `Look at this ${chart?.type}`"
			ref="apexCharts"
			@mounted="handleChartRender(key)"
		></apexchart>
	</v-card>
</template>

<script setup>
import  {useChartOptions}  from "@/compasables/get-chart-options.js";
//import { useKnowladgebaseReport } from "@/stores";
import { watch } from "vue";
import { ref, nextTick, onMounted } from "vue";

const { getChartOptions } = useChartOptions();
//const knowladgebaseStore = useKnowladgebaseReport();

const props = defineProps({
	charts: {
		type: Array,
		required: true,
	},
	schemaNumber: {
		type: Number,
	},
});

const apexCharts = ref([]);
const schemasWithImages = ref([]);

const captureChart = async (index) => {
	await nextTick();
	const chartInstance = apexCharts.value[index]?.chart;

	if (chartInstance) {
		setTimeout(async () => {
			const dataURI = await chartInstance.dataURI();
			props.charts[index].chartImage = dataURI.imgURI;
			schemasWithImages.value = props.charts;
			//  knowladgebaseStore[`schema${props.schemaNumber}`].charts = [
			// 	...schemasWithImages.value,
			// ];

			console.log(
				//knowladgebaseStore[`schema${props.schemaNumber}`].charts
			);
			

			//console.log('d' , typeof knowladgebaseStore[`schema${props.schemaNumber}`]);
			

			// Object.defineProperty(knowladgebaseStore[`schema${props.schemaNumber}`] ,
			// 	'charts',
			// 	{value:props.charts}
			//  )

			
		}, 1000);
	}
};

const handleChartRender = (index) => {
	captureChart(index);
};



watch(
	() => props.charts,
	(newCharts) => {
		schemasWithImages.value = [...newCharts];
	},
	{ deep: true }
);
</script>

<style scoped>
.captured-chart {
	margin-top: 20px;
	padding: 10px;
	border: 1px solid #ccc;
	text-align: center;
}

.captured-chart img {
	max-width: 100%;
	height: auto;
	border: 1px solid #ddd;
}
</style>

