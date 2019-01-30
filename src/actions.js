export default {
	//将选中的答案存入state
	storeStart({ commit },start) {
		commit('STORE_START',start);
	},
}