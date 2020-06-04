import Vue from 'vue'

import CpWindowSimple from './window/simple.vue'
import CpWindowNormal from './window/normal.vue'
import CpWindowShape1 from './window/shape1.vue'
import CpWindowShape2 from './window/shape2.vue'
import CpWindowShape3 from './window/shape3.vue'
import CpWindowShape4 from './window/shape4.vue'

export default {
    install() {
        Vue.component('cp-window-simple', CpWindowSimple)
        Vue.component('cp-window-normal', CpWindowNormal)
        Vue.component('cp-window-shape1', CpWindowShape1)
        Vue.component('cp-window-shape2', CpWindowShape2)
        Vue.component('cp-window-shape3', CpWindowShape3)
        Vue.component('cp-window-shape4', CpWindowShape4)
    }
}