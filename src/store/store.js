import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    nameData:''
  },
  mutations:{
    getnameData(state,nameData){
    	state.nameData = nameData
    }
  },
  actions:{
  	getName(context){
  		axios.get('/static/mock/nameList.json').then(data => {
  			context.commit("getnameData",data.data.result)
  		})
	  }
  }
})