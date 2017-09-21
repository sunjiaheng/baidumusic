
<template>
<footer>
	<div class="clear">
		<div class="fk">首页</div>
		<div class="fk">意见反馈</div>
	</div>

	<div class="logo">
		<span></span>
	</div>
</footer>
</template>

<script>
export default {

  name: 'footer2',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
footer{
	.fk{
		padding: 16px 0;
		text-align: center;
		font-size: 15px;
		color:#666;
		box-sizing: border-box;
		width:50%;
		float: left;
	}
	.logo{
		height: 40px;
		text-align: center;
		span{
			display: inline-block;
			width: 140px;
			height: 20px;
			background:url(../assets/song-bbd.png) no-repeat -4px -4px;	
			background-size:147px;
			
		}
	}
}
</style>