<template>
<div class="main">
	<div class="artlists-header">
		<ul class="area clear">
			<li :class="this.areanum ==0?'on':''" @click='areaclick(0)'><span>全部</span></li>
			<li :class="this.areanum ==6?'on':''" @click='areaclick(6)'><span>华语</span></li>
			<li :class="this.areanum ==3?'on':''" @click='areaclick(3)'><span>欧美</span></li>
			<li :class="this.areanum ==7?'on':''" @click='areaclick(7)'><span>韩国</span></li>
			<li :class="this.areanum ==60?'on':''" @click='areaclick(60)'><span>日本</span></li>
			<li :class="this.areanum ==5?'on':''" @click='areaclick(5)'><span>其他</span></li>
		</ul>
		<ul class="sex clear">
			<li :class="this.sexnum ==0?'on':''" @click='sexclick(0)'><span>全部</span></li>
			<li :class="this.sexnum ==1?'on':''" @click='sexclick(1)'><span>男</span></li>
			<li :class="this.sexnum ==2?'on':''" @click='sexclick(2)'><span>女</span></li>
			<li :class="this.sexnum ==3?'on':''" @click='sexclick(3)'><span>组合</span></li>
		</ul>
		<ul class="abc clear">
			<li>{{this.abc}}{{areashow}}{{sexshow}}</li>
			<li class="iconfont icon-zimupaixu" @click="abcclick"></li>
		</ul>
	</div>
	<transition name="fade2">
	<div class="black" v-show="abcshow" @click="abcclick">
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
</div>
</template>

<script>
export default {

  name: 'artlists',

  data () {
    return {
    	areanum: "0",
    	sexnum : "0",
    	abc : "热门",
    	areatable:{ 
    		"0":"全部",
	    	"6":"华语",
	    	"3":"欧美",
	    	"7":"韩国",
	    	"60":"日本",
	    	"5":"其他"
		},
		sextable:{
			"0":"全部",
			"1":"男",
			"2":"女",
			"3":"组合"
		},
		abcshow:false   	


    };
  },
  methods:{
  	areaclick:function(index){
  		this.areanum = index
  	},
  	sexclick:function(index){
  		this.sexnum = index
  	},
  	abcclick:function(e){
  		if(e.target.nodeName!='H3'&&this.abcshow){
  			if(e.target.innerText.length<=2&&e.target.innerText!="关闭"){
  				if(e.target.innerText=="热门"){

  				}else if(e.target.innerText=="其它"){

  				}else{

  				}
  				this.abc = e.target.innerText
  			}
  	
  		}
  		this.abcshow = !this.abcshow
  	}
  },
  computed:{
  	areashow:function(){
  		if(this.areanum!=0){
  			return "-"+this.areatable[this.areanum]
  		}
  	},
  	sexshow:function(){
  		if(this.sexnum!=0){
  			return "-"+this.sextable[this.sexnum]
  		}
  	}
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

</style>