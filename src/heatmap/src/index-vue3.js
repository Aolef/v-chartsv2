import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { HeatmapChart, MapChart } from 'echarts/charts'
import { VisualMapComponent } from 'echarts/components'

import { heatmap } from './main'
import { name, version } from '../package.json'
import 'echarts/extension/bmap/bmap'

echartsLib.use([HeatmapChart, MapChart, VisualMapComponent])

const VeHeatmap = createChartVue3({
  name: 'VeHeatmap',
  chartHandler: heatmap
})

VeHeatmap.install = app => {
  logCopyRight(name, version)
  app.component(VeHeatmap.name, VeHeatmap)
}

export default VeHeatmap
