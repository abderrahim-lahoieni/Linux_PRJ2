import { createStore } from 'vuex';

// Vue.use(Vuex);

const store = createStore({
    state: {
      sharedValues: {
        id: '',
        emailaddr: '',
        idgr:'',
       
      }
      },
      mutations: {
        updateSharedValues(state, payload) {
          state.sharedValues = { ...state.sharedValues, ...payload };
        }
        },
      
      actions: {
        setSharedValues({ commit }, values) {
          commit('updateSharedValue', values);
        },
      },
      getters: {
        getSharedValues: state => state.sharedValues,
        }
      }
  );
export default store;

