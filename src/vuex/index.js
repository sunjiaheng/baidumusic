import Vuex from "vuex";
import Vue from "vue";
import {} from "./mutationtype";
Vue.use(Vuex);
import axios from "axios";
const store = new Vuex.Store({

    state:{
    	//设置状态	
    },
    actions:{
    	//异步处理
    	
    },
	mutations:{
		//这里是同步调用， 可以直接操作状态
		// changeTitle :(state,payload)=>{
		// 	console.log(payload);
		// 	state.filename= payload;
		// }
		
	},
	getters:{
		//store的计算属性
	}
})


export default store;