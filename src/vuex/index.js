import Vuex from "vuex";
import Vue from "vue";
import {MUTATION_xglist,MUTATION_rglist,MUTATION_tjlist,MUTATION_rmgdlist,MUTATION_artlist
,MUTATION_area,MUTATION_sex,MUTATION_abc,MUTATION_playmusic} from "./mutationtype";
Vue.use(Vuex);

const store = new Vuex.Store({

    state:{
    	//设置状态
    	xglist:[],
    	rglist:[],
    	tjlist:[],
    	rmgdlist:[],
    	artlist:{},
    	currentname:"0-0-",
    	area: 0,
    	sex : 0,
    	abc : "",
    	playmusiclink:""
    },
    actions:{
    	//异步处理
    	// 1  新歌榜
    	getxglist:(store,payload)=>{
    		axios.get("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0").then(res=>{
		  		// console.log(res.data.song_list)
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
	  	},
	  	//获取歌手列表
	  	getartlist:(store,payload)=>{

	  		var nowSecond = Date.parse(new Date());
	  		var currentname = payload.area+"-"+payload.sex+"-"+payload.abc;
	  		var offsetlength = 0;
	  		console.log(store.state.artlist[currentname] != undefined)
	  		if(store.state.artlist[currentname] != undefined){
	  				offsetlength = store.state.artlist[currentname].length
	  				console.log(offsetlength)
	  		}
		  		
	  		axios.get("/v1/restserver/ting?from=webapp_music&method=baidu.ting.artist.getList&format=jsonp&callback=artist_getList&"
	  			+"limit=20&order=1&area="+payload.area+"&sex="+payload.sex+"&abc="+payload.abc+"&offset="+offsetlength+"&s_protocol=&_=1505866654987"+nowSecond).then(res=>{
		  		//切割成合法字符串
		  		var x = res.data.substring(15);
		  		x = x.substring(0,x.lastIndexOf(")"))
		  		
		  		// console.log(store.state.artlist.currentname)
		  		store.commit(MUTATION_artlist,{name:currentname,data:JSON.parse(x).artist})

		  	})
	  	},

	  	//设置地区,性别，abc
	  	setarea:(store,payload)=>{
	  		store.commit(MUTATION_area,payload)
	  	},
	  	setsex:(store,payload)=>{
	  		store.commit(MUTATION_sex,payload)
	  	},
	  	setabc:(store,payload)=>{
	  		store.commit(MUTATION_abc,payload)
	  	},

	  	getplaymusic:(store,payload)=>{
	  		// console.log(payload)
			axios.get("/v1/restserver/ting?method=baidu.ting.song.playAAC&songid="+payload).then(res=>{
				console.log(res.data)
				store.commit(MUTATION_playmusic,res.data.bitrate.file_link)
				// console.log(res)
		  	})
	  	}



		  	
    	
    },
	mutations:{
		//这里是同步调用， 可以直接操作状态
		[MUTATION_xglist]:(state,payload)=>{
			state.xglist = payload
		},
		[MUTATION_rglist]:(state,payload)=>{
			// console.log(payload)
			state.rglist = payload
		},
		[MUTATION_tjlist]:(state,payload)=>{
			state.tjlist = payload
		},
		[MUTATION_rmgdlist]:(state,payload)=>{
			state.rmgdlist = payload
		},
		[MUTATION_artlist]:(state,payload)=>{
			// console.log(payload.name);
			// state.artlist[payload.name]=payload.data;
			state.currentname = payload.name;
			var obj = {[payload.name]:payload.data}
			if(state.artlist[payload.name] != undefined){
				state.artlist[payload.name] = [...state.artlist[payload.name],...payload.data];
			}else{
				state.artlist = {...state.artlist,...obj}
			}
			
			// console.log(state.artlist)
		},
		[MUTATION_area]:(state,payload)=>{
			state.area = payload;
		},
		[MUTATION_sex]:(state,payload)=>{
			state.sex = payload;
		},
		[MUTATION_abc]:(state,payload)=>{
			state.abc = payload;
		},
		[MUTATION_playmusic]:(state,payload)=>{
			state.playmusiclink = payload
		}
		
	},
	getters:{
		//store的计算属性
		getarea:(state)=>{
			return state.area;
		},
		getsex:(state)=>{
			return state.sex;
		},
		getabc:(state)=>{
			return state.abc;
		},
		filterart:(state)=>{
			// console.log("filter");
			// console.log(state.artlist)
			return state.artlist[state.currentname];
		},
		playmusiclink:(state)=>{
			console.log(state.playmusiclink)
			return state.playmusiclink;
		}
	}
})


export default store;