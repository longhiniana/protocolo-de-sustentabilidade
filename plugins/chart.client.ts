import { use } from 'echarts/core';

// import ECharts modules manually to reduce bundle size
import { SVGRenderer } from 'echarts/renderers';
import { RadarChart  } from 'echarts/charts';
import { TitleComponent, LegendComponent, TooltipComponent } from 'echarts/components';

export default defineNuxtPlugin(() => {
  use([SVGRenderer, RadarChart, TitleComponent, LegendComponent, TooltipComponent]);
});
