/**
 * @Author: wushuang
 * @Last Modified by: wushuang
 * @Last Modified time: 2019-07-19 16:58:36
 */
export default {
    setClientWidth ({ commit, state }, val) {
        state.clientWidth = val - 3
    },
    setMainHeight ({ commit, state }, val) {
        state.mainHeight = val - 10
    },
    setClientHeight ({ commit, state }, val) {
        state.clientHeight = val - 3
    },
    setSearchVal ({commit, state}, val) {
        state.searchVal = val
    }
}
