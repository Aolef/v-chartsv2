import { logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'

import { liquidfill } from './main'
import { name, version } from '../package.json'
import 'echarts-liquidfill'

const VeLiquidfill = Object.assign({}, createChartVue2, {
  name: 'VeLiquidfill',
  data() {
    this.chartHandler = liquidfill
    return {}
  }
})

VeLiquidfill.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeLiquidfill.name, VeLiquidfill)
}

export default VeLiquidfill
