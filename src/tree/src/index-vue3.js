import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { TreeChart } from 'echarts/charts'

import { tree } from './main'
import { name, version } from '../package.json'

echartsLib.use([TreeChart])

const VeTree = createChartVue3({
  name: 'VeTree',
  chartHandler: tree
})

VeTree.install = app => {
  logCopyRight(name, version)
  app.component(VeTree.name, VeTree)
}

export default VeTree
