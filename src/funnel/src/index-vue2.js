import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { FunnelChart } from 'echarts/charts'

import { funnel } from './main'
import { name, version } from '../package.json'

echartsLib.use([FunnelChart])

const VeFunnel = Object.assign({}, createChartVue2, {
  name: 'VeFunnel',
  data() {
    this.chartHandler = funnel
    return {}
  }
})

VeFunnel.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeFunnel.name, VeFunnel)
}

export default VeFunnel
export { funnel }
