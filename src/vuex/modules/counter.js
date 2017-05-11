const state = {
  count: 0,
};

const mutations = {
  increment(stt) {
    const stte = stt;
    stte.count += 1;
  },
  decrement(stt) {
    const stte = stt;
    stte.count -= 1;
  },
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state: stt }) {
    if ((stt.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 1000);
    });
  },
};

const getters = {
  count: stt => stt.count,
  evenOrOdd: stt => (stt.count % 2 === 0 ? 'even' : 'odd'),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
