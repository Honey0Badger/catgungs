import { createStore } from 'vuex'

export default createStore({
  state: {
    workers:[]
  },
  getters: {
    getAllJob(state){
      return state.workers
    },
    getCatId: state=>(id)=>{
      return state.workers.find(a=>a.id == id)
    }
  },
  mutations: {
    addWorker(state, par){
      this.state.workers.push(par)
    },
    deleteCat(state, par){
      state.workers = state.workers.filter(a => a.id != par)
    },
    editWorker(state, par){
      state.workers = state.workers.filter(a=> a.id !=par.id);
      this.state.workers.push(par)
    }
  },
  actions: {
  },
  modules: {
  }
})
