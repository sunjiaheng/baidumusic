import Vuex from "vuex";
import Vue from "vue";
import {MUTATION_xglist,MUTATION_rglist,MUTATION_tjlist,MUTATION_rmgdlist} from "./mutationtype";
Vue.use(Vuex);

const store = new Vuex.Store({

    state:{
    	//设置状态
    	xglist:[],
    	rglist:[],
    	tjlist:[],
    	rmgdlist:[],
    	artlist:{}
    },
    actions:{
    	//异步处理
    	// 1  新歌榜
    	getxglist:(store,payload)=>{
    		axios.get("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0").then(res=>{
		  		console.log(res.data.song_list)
		  		store.commit(MUTATION_xglist,res.data.song_list)
	  		})
    	},
	  	
	  	// 2  热歌榜
	  	getrglist:(store,payload)=>{
		  	axios.get("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=6&offset=0").then(res=>{
		  		store.commit(MUTATION_rglist,res.data.song_list)
		  	})
		},
	  	// 推荐列表
	  	gettjlist:(store,payload)=>{
			axios.get("/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6").then(res=>{
				store.commit(MUTATION_tjlist,res.data.result.list)
		  	})
		},
	  	//热门歌单
	  	getrmgdlist:(store,payload)=>{
	  		var nowSecond = Date.parse(new Date());
		  	axios.get("/v1/restserver/ting?restserver/ting?from=webapp_music&method=baidu.ting.diy.gedan&format=jsonp&callback=diy_gedan&page_no=2&page_size=6&query=%E5%85%A8%E9%83%A8&s_protocol=&_="+nowSecond).then(res=>{
		  		//切割成合法字符串
		  		var x = res.data.substring(14);
		  		x = x.substring(0,x.lastIndexOf(")"))
		  		store.commit(MUTATION_rmgdlist,JSON.parse(x).content)
		  	})
	  	}
		  	
    	
    },
	mutations:{
		//这里是同步调用， 可以直接操作状态
		[MUTATION_xglist]:(state,payload)=>{
			console.log(state)
			state.xglist = payload
		},
		[MUTATION_rglist]:(state,payload)=>{
			state.rglist = payload
		},
		[MUTATION_tjlist]:(state,payload)=>{
			state.tjlist = payload
		},
		[MUTATION_rmgdlist]:(state,payload)=>{
			state.rmgdlist = payload
		}
		
	},
	getters:{
		//store的计算属性
	}
})


export default store;