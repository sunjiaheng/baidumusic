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
			<div class="box" v-for="data in xglist" :key="data.all_artist_id">
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
		<ul>
			<li>热歌榜</li>
			<li>新歌榜</li>
			<li>King榜</li>
		</ul>
		<div class="container">
			<ul>
				<li v-for="">
					<div class="pic"><img src=""><i>01</i></div>
					<div class="trend"></div>
					<div class="play-state"></div>
					<div class="info"></div>
					<div class="download"></div>
				</li>
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
</div>
</template>

<script>
export default {

  name: 'home',
  mounted(){
  	// 1  新歌榜
  	axios.get("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=3&offset=0").then(res=>{
  		// console.log(res.data.song_list)
  		this.xglist = res.data.song_list
  	})
  	// 2  热歌榜
  	axios.get("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=6&offset=0").then(res=>{
  		// console.log(res.data.song_list)
  		this.rmlist = res.data.song_list
  	})
  	// 推荐列表
	axios.get("/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6").then(res=>{
		// console.log(res.data.result)
		this.tjlist = res.data.result.list
  	})
  	//热门歌单
  	
  	var nowSecond = Date.parse(new Date());
  	axios.get("/v1/restserver/ting?restserver/ting?from=webapp_music&method=baidu.ting.diy.gedan&format=jsonp&callback=diy_gedan&page_no=2&page_size=6&query=%E5%85%A8%E9%83%A8&s_protocol=&_="+nowSecond).then(res=>{
  		//切割成合法字符串
  		var x = res.data.substring(14);
  		x = x.substring(0,x.lastIndexOf(")"))
  		
  		this.rmgdlist = JSON.parse(x).content
		
  	})
  },

  data () {
    return {
    	xglist:[],
    	rmlist:[],
    	tjlist:[],
    	rmgdlist:[]

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