<template>
<div class="play">
	<img src="../assets/load.jpg" alt="">
	<div class="info">
		<div class="title"></div>
		<div class="name"></div>
	</div>
	<ul>
		<li class="iconfont icon-bofang"></li>
		<li class="iconfont icon-jiantouyou"></li>
		<li class="iconfont icon-dingdan"></li>
	</ul>
	<audio src="http://zhangmenshiting.baidu.com/data2/music/acde8c2f34538234c41893a07945f6b5/540719546/540719546.mp3?xcode=05e0d30fc6f191e1180b9e6dd2675aac"  controls  autoplay></audio>
</div>
</template>

<script>
import {mapState,mapGetters} from "vuex";
export default {

  name: 'player',

  data () {
    return {

    }
  },
  computed:{
  	playmusiclink:function(){
  		console.log(this.$store.state.playmusiclink)
  		return this.$store.state.playmusiclink
  	}
  }
}
</script>

<style lang="scss" scoped>
.play{
	position: fixed;
	left: 0;
	bottom:0;
	width: 100%;

	display: flex;
	box-sizing: border-box;
    color: #333;
    padding-left: 16px;
    padding-right: 16px;
    
    width: 100%;
    z-index: 2;
    background: #fff;
    img{
    	width:50px;
    	height: 50px;
    	margin-right:9px;
    	margin-top:10px;
    }
    .info{
    	flex:1;
    	font-size: 12px;
    	padding-right: 8px;
    }
    ul{
    	flex:1;
    	line-height: 70px;
    	display:flex;
    	align-item:center;
    	justify-content: space-between;
    	li{
    		font-size:35px;
    	}
    }
    audio{
    	// display:none
    }

}
</style>