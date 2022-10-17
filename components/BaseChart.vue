<template>
	<div class="w-[300px] h-[350px]">
		<client-only>
			<v-chart :option="option" />
		</client-only>
	</div>
</template>

<script>
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { RadarChart } from 'echarts/charts';
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

use([
	SVGRenderer, RadarChart, TitleComponent, LegendComponent, TooltipComponent
]);

const MAX_WEIGHT = 5
const MIN_WEIGHT = 1

export default defineComponent({
	name: 'BaseChard',
	components: {
		VChart,
	},
	props: {
		indicators: {
			type: Array,
			default: () => ([])
		},
		serie: {
			type: Array,
			default: () => ([])
		}
	},
	provide: {
		[THEME_KEY]: 'light',
	},
	setup (props) {

		const option = computed(() => ({
			alignTicks: false,
			radar: {
				shape: 'circle',
				indicator: Array.from(props.indicators).map((el, index) => ({ name: `#${++index}`, max: MAX_WEIGHT, min: MIN_WEIGHT })),
			},
			series: [
				{
					type: 'radar',
					areaStyle: {},
					data: [
						{
							value: Array.from(props.serie),
						}
					]
				}
			]
		}))

		return { option };
	},
});
</script>