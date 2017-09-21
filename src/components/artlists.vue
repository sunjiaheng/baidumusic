<template>
<div class="main">
	<div class="artlists-header">
		<ul class="area clear">
			<li :class="area ==0?'on':''" @click="areaclick(0)"><span>全部</span></li>
			<li :class="area ==6?'on':''" @click='areaclick(6)'><span>华语</span></li>
			<li :class="area ==3?'on':''" @click='areaclick(3)'><span>欧美</span></li>
			<li :class="area ==7?'on':''" @click='areaclick(7)'><span>韩国</span></li>
			<li :class="area ==60?'on':''" @click='areaclick(60)'><span>日本</span></li>
			<li :class="area ==5?'on':''" @click='areaclick(5)'><span>其他</span></li>
		</ul>
		<ul class="sex clear">
			<li :class="sex ==0?'on':''" @click='sexclick(0)'><span>全部</span></li>
			<li :class="sex ==1?'on':''" @click='sexclick(1)'><span>男</span></li>
			<li :class="sex ==2?'on':''" @click='sexclick(2)'><span>女</span></li>
			<li :class="sex ==3?'on':''" @click='sexclick(3)'><span>组合</span></li>
		</ul>
		<ul class="abc clear">
			<li>{{abc==""?"热门":abc}}{{this.areatable[area]}}{{this.sextable[sex]}}</li>
			<li class="iconfont icon-zimupaixu" @click="abcclick"></li>
		</ul>
	</div>
	<transition name="fade2">
	<div class="black" v-if="abcshow" @click="abcclick">
		<transition name="fade">
			<div class="bottomabc" v-if="abcshow">
				<h3>歌手首字母</h3>
				<div class="model-content">
		            <ul class="row">
		                <li class="col">热门</li>
		                <li class="col">A</li>
		                <li class="col">B</li>
		                <li class="col">C</li>
		                <li class="col">D</li>
		                <li class="col">E</li>
		                <li class="col">F</li>
		            </ul>
		            <ul class="row">
		                <li class="col">G</li>
		                <li class="col">H</li>
		                <li class="col">I</li>
		                <li class="col">J</li>
		                <li class="col">K</li>
		                <li class="col">L</li>
		                <li class="col">M</li>
		            </ul>
		            <ul class="row">
		                <li class="col">N</li>
		                <li class="col">O</li>
		                <li class="col">P</li>
		                <li class="col">Q</li>
		                <li class="col">R</li>
		                <li class="col">S</li>
		                <li class="col">T</li>
		            </ul>
		            <ul class="row">
		                <li class="col">U</li>
		                <li class="col">V</li>
		                <li class="col">W</li>
		                <li class="col">X</li>
		                <li class="col">Y</li>
		                <li class="col">Z</li>
		                <li class="col">其他</li>
		            </ul>
		        </div>
	            <a>关闭</a>
			</div>
		</transition>
	</div>
	</transition>
	<ul class="artlistul">
		<li v-for="(singer,index) in filterart" :key="singer.artist_id">
			<div class="pic">
				<img :src="singer.avatar_small">
			</div>
			<div class="info">
				<div>{{singer.name}}</div>
			</div>
		</li>
		<li class="loadmore" @click = "moreclick">查看更多...</li>
	</ul>
	<foot></foot>
</div>
</template>

<script>
import {mapState,mapGetters} from "vuex";
import foot from "./footer2"

export default {

  name: 'artlists',
  components:{
  	foot
  },

  data () {
    return {
    	
    	areatable:{ 
    		"0":"",
	    	"6":"-华语",
	    	"3":"-欧美",
	    	"7":"-韩国",
	    	"60":"-日本",
	    	"5":"-其他"
		},
		sextable:{
			"0":"",
			"1":"-男",
			"2":"-女",
			"3":"-组合"
		},
		abcshow:false,
		filterart2:[111,222]  	


    };
  },
  methods:{
  	areaclick(index){
  		this.$store.dispatch("setarea",index);
  		this.$store.dispatch("getartlist",{"area":index,"sex":this.sex ,"abc":this.abc});
  	},
  	sexclick:function(sex){
  		this.$store.dispatch("setsex",sex);
  		this.$store.dispatch("getartlist",{"area":this.area,"sex":sex ,"abc":this.abc});
  	},
  	abcclick:function(e){
  		if(e.target.nodeName!='H3'&&this.abcshow){
  			if(e.target.innerText.length<=2&&e.target.innerText!="关闭"){
  				if(e.target.innerText=="热门"){
  					this.$store.dispatch("setabc","");
  					this.$store.dispatch("getartlist",{"area":this.area,"sex":this.sex,"abc":""});

  				}else if(e.target.innerText=="其他"){
  					this.$store.dispatch("setabc","other");
  					this.$store.dispatch("getartlist",{"area":this.area,"sex":this.sex,"abc":"other"});

  				}else{
					this.$store.dispatch("setabc",e.target.innerText);
					this.$store.dispatch("getartlist",{"area":this.area,"sex":this.sex ,"abc":e.target.innerText});
  				}
  			}
  	
  		}
  		this.abcshow = !this.abcshow
  	},
  	moreclick:function(){
  		this.$store.dispatch("getartlist",{"area":this.area,"sex":this.sex,"abc":this.abc});
  	}

  },
  computed:{
  	area:function(){
  		return this.$store.state.area
  	},
  	sex:function(){
  		return this.$store.state.sex
  	},
  	abc:function(){
  		return this.$store.state.abc
  	},
  	...mapGetters(["filterart"])
  	// filterart:function(){
  	// 	return this.$store.getters.filterart
  	// }
  	


  },
  mounted(){
  	if(!this.$store.state.artlist["0-0-"]){
  		this.$store.dispatch("getartlist",{"area":"0","sex":"0","abc":"","length":"0"});
  	}
  	

  },
  updated:{

  }
};
</script>

<style lang="scss" scoped>
.artlists-header{
	.area,.sex{
		padding: 10px 5px;
		background-color: #fcfcfc;
		color:#333;
		li{
			width: 16.66%;
			float: left;
			text-align: center;

		}
		li.on{
			color:#00a8ff;
			span{
				border-bottom: 1px solid #00a8ff;
				
			}
		}
	}
	.abc{
		padding: 10px 5px;
		display: flex;
		color:#666;
		li:nth-child(1){
			flex:1;
			text-align: left;
			padding-left: 10px;
		}
		li:nth-child(2){
			flex:1;
			text-align: right;
			padding-right: 10px;
			font-size: 22px;
		}
	}
}
.black{
	width:100%;
	height: 100%;
	position:fixed;
	top:0;
	left:0;
	z-index: 2000;
	background:rgba(0,0,0,0.7);
	

	.bottomabc{
		width:100%;
		height:360px;
		position:absolute;
		bottom:0;
		left:0;
		background:#fff;
		text-align: center;
		
		
		h3{
			height: 60px;
		    margin: 0 10px;
		    line-height: 60px;
		    font-size: 1.6rem;
		    font-weight: 400;
		    border-bottom: 1px solid #f2f2f2;
		}
		.model-content{
			padding:0 5px;
			box-sizing: border-box;
			.row{
				height:60px;
				line-height: 60px;
				display:flex;
				box-orient: horizontal;
    			box-direction: normal;
    			flex-direction:row;
			    flex-wrap: wrap;
			    margin-right: -4px;
			    margin-left: -4px;
			    .col{
			    	box-sizing: border-box;
			    	box-flex:1;
			    	flex-grow:1;
		    	    flex-basis: 0;
    				max-width: 100%;
			    }
			}
		}
	}
	
}
.fade-enter-active, .fade-leave-active {
	transition: transform .2s;
	transform:translateY(0);
}
.fade-enter, .fade-leave-to {
	transform:translateY(360px);
}

.fade2-enter-active, .fade2-leave-active {
	transition: transform .05s;
	transform:translateY(0);
}
.fade2-enter, .fade2-leave-to {
	transition: transform .01s .2s;
	transform:translateY(100%);
}
.artlistul{
	padding:0 17px;
	li{
		height:70px;
		display:flex;
		box-orient: horizontal;
   		box-direction: normal;
		flex-direction: row;
		box-pack:start;
		justify-content:flex-start;
		box-align:center;
		align-items:center;
		box-sizing: border-box;
		border-bottom: 1px solid #F2F2F2;
		.pic{
			width: 54px;
		    height: 54px;
		    margin-right: 15px;
		    box-direction: normal;
		    img{
		    	width:100%;
		    	border-radius:50%;
		    	vertical-align: middle;
		    }
		}
		.info{
			flex:1;
			display: flex;
		    box-orient: vertical;
		    box-direction: normal;
		    flex-direction: column;
		    box-align: start;
		    align-items: flex-start;
   			-webkit-box-pack: start;
   			justify-content: flex-start;
		}
	}
	.loadmore{
		height:44px;
		line-height: 44px;
	
		font-size: 16px;
		box-pack: center;
		justify-content: center;
	}
}


</style>