<template>
<div class="main">
	<div class="tj">
		<h2>新歌推荐 <span>更多</span></h2>
		<div class="container clear">
			<div class="box" v-for="data in tjlist" :key="data.all_artist_id">
				<div class="pic">
					<img :src="data.pic_small" >
				</div>
				<h4 class="title">{{data.title}}</h4>
				<h4 class="author">{{data.author}}</h4>
			</div>
		</div>
	</div>
	<div class="xg">
		<h2>新歌速递 <span>更多</span></h2>
		<div class="container clear">
			<div class="box" v-for="(data,index) in xglist"  v-if="index<3" :key="data.all_artist_id">
				<div class="pic">
					<img :src="data.pic_small" >
				</div>
				<h4 class="title">{{data.title}}</h4>
				<h4 class="author">{{data.author}}</h4>
			</div>
		</div>
	</div>
	<div class="ad">
		<img src="../assets/ad.jpg" alt="">
	</div>
	<div class="yybd">
		<h2>音乐榜单 <span>更多</span></h2>
		<ul class="nav clear">
			<li :class="this.navonshow ==0?'active':''" @click='navclick(0)'>热歌榜</li>
			<li :class="this.navonshow ==1?'active':''" @click='navclick(1)'>新歌榜</li>
			<li :class="this.navonshow ==2?'active':''" @click='navclick(2)'>King榜</li>
		</ul>
		<div class="container">
			<ul :class="this.navonshow ==0?'on':''">
				<li v-for="(data,index) in rglist" :key="data.album_id">
					<div class="pic"><img :src="data.pic_small"><i>0{{index}}</i></div>
					<div class="trend"></div>
					<div class="play-state"></div>
					<div class="info">
						<div class="name">
							{{data.album_title}}
							<span class="sq"></span>
						</div>
						<div class="author">{{data.artist_name}}</div>
					</div>
					<div class="download iconfont icon-download"></div>
				</li>
			</ul>
			<ul :class="this.navonshow ==1?'on':''">
				<li v-for="(data,index) in xglist" :key="data.album_id">
					<div class="pic"><img :src="data.pic_small"><i>0{{index}}</i></div>
					<div class="trend"></div>
					<div class="play-state"></div>
					<div class="info">
						<div class="name">
							{{data.album_title}}
							<span class="sq"></span>
						</div>
						<div class="author">{{data.artist_name}}</div>
					</div>
					<div class="download iconfont icon-download"></div>
				</li>
			</ul>
			<ul  :class="this.navonshow ==2?'on':''">
				King榜api还在查找中
			</ul>
		</div>
	</div>
	<div class="rmgd">
		<h2>热门歌单 <span>更多</span></h2>
		<div class="container clear">
			<div class="box" v-for="data in rmgdlist" :key="data.listid">
				<div class="pic">
					<img :src="data.pic_300" >
				</div>
				<h4 class="title">{{data.title}}</h4>
				
			</div>
		</div>
	</div>
	<foot></foot>
</div>
</template>

<script>
import foot from "./footer"
import {mapState,mapGetters} from "vuex";

export default {

  name: 'home',
  components:{
  	foot
  },
  mounted(){
  	
  	if(this.xglist.length == 0 ){
  		this.$store.dispatch("getxglist","")
  	}
  	if(this.rglist.length == 0 ){
  		this.$store.dispatch("getrglist","")
  	}
  	if(this.tjlist.length == 0 ){
  		this.$store.dispatch("gettjlist","")
  	}
  	if(this.rmgdlist.length == 0 ){
  		this.$store.dispatch("getrmgdlist","")
  	}
  	
  },
  computed:{
  	...mapState(["xglist"]),
  	...mapState(["rglist"]),
  	...mapState(["tjlist"]),
  	...mapState(["rmgdlist"])
  },

  data () {
    return {
    	navonshow:"0"
    }
  },
  methods:{
  	navclick:function(index){
  		this.navonshow = index
  	}
  }
}
</script>

<style lang="scss" scoped>
.xg,.tj,.rmgd{
	padding: 10px 17px;
	h2{
		margin:14px 0 18px 0;
		font-size:20px;
		position: relative;
		span{
			position:absolute;
			right: 0px;
			top: 0px;
			font-size: 12px;
			font-weight: 100;
			line-height: 20px;
		}
	}
	.container{
		background-color: #fff;
	    margin-top: 10px;
	    .box{
	    	float: left;
	    	width:33.3%;
	    	box-sizing: border-box;
	    	padding: 0 5px 10px;
	    	.pic{
	    		img{
	    			width:100%;
	    		}
	    	}
	    	.title{
	    		font-weight: 100;
	    		font-size: 12px;
	    		overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    line-height: 14px;
			    margin-bottom: 2px;
	    	}
	    	.author{
	    		overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    color: #999;
			    font-size: 12px;
			    line-height: 12px;
	    	}
	    }
	}

}
.yybd{
	padding: 10px 17px;
	h2{
		margin:14px 0 18px 0;
		font-size:20px;
		position: relative;
		span{
			position:absolute;
			right: 0px;
			top: 0px;
			font-size: 12px;
			font-weight: 100;
			line-height: 20px;
		}
	}
	.nav{
		li{
			width:33%;
			float:left;
			text-align: center;
			font-size: 16px;
			padding:18px 0 12px 0;
			color: #999;
		}
		li.active{
			color:#299de7;
		}
	}
	.container{
		.on{
			display:block
		}
		ul{
			display:none;
			li{
				display: flex;
				height:70px;
				border-bottom: 1px solid #eee;
				align-items: center;
				.pic{
					position:relative;
					width:45px;
					margin-right:8px;
					img{
						width:100%;
					}
					i{
						position: absolute;
						bottom:0;
						right:0;
						font-size: 12px;
						color:#fff;
						font-style: normal;
						padding:2px;

					}
				}
				.trend{
					width:12px;
					height:20px;
					margin-right:10px;
					background:url("../assets/ui-list-0e4.png") no-repeat -187px -128px/213px 158px;
				}
				.play-state{
					width:12px;
					height:12px;
					margin-right: 12px;
					transition: margin .2s;
					background:url("../assets/ui-list-0e4.png") no-repeat -153px -199px/222px 222px;
					
				}
				.info{
					flex:1;
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    height:36px;
					.name{
						overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    font-size: 16px;
					    color: #333;
					    .sq{
					    	display:inline-block;
					    	width:16px;
					    	height:11px;
					    	background:url("../assets/ui-list-0e4.png") no-repeat -187px -72px/213px 158px;
					    }
					}
					.author{
						    overflow: hidden;
						    text-overflow: ellipsis;
						    white-space: nowrap;
						    font-size: 12px;
						    color: #999;
						    margin-top: 2px;
					}
				}
				.download{
					width:36px;
					height:36px;
					color:#333;
					line-height: 36px;
					text-align: center;
				}
				

			}
		}
	}

}
.rmgd .container .box h4.title{
	white-space: normal;
	overflow: visible;
	height:24px;
}
.ad{
	margin:10px 17px 10px;
	img{
		width:100%;
	}
}

</style>