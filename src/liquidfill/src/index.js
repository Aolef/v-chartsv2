import * as Vue from 'vue'
import './style/v-charts.css'

const useVueVersion = () => {
  // Make copy to prevent import warning in Vue 2
  const vueObject = { ...Vue }
  let version

  if (vueObject.default) version = 2
  if (vueObject.version && vueObject.version[0] === '3') {
    version = 3
  }

  return version
}

let VeLiquidfill

if (useVueVersion() === 2) {
  VeLiquidfill = require('./vue2/v-charts.liquidfill.mjs')
} else {
  VeLiquidfill = await import('./vue3/v-charts.liquidfill.mjs')
}

VeLiquidfill = VeLiquidfill.default || VeLiquidfill

export default VeLiquidfill
