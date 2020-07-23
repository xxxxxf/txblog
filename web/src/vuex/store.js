/**
 * @Author: wuhsuang
 * @Last Modified by: wushuang
 * @Last Modified time: 2019-07-19 13:32:26
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    clientHeight: null,
    mainHeight: null,
    clientWidth: null,
    searchVal: null
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
