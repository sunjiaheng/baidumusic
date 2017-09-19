<template>
<footer>
	<div class="fk">意见反馈</div>
	<div class="logo">
		<span></span>
	</div>
</footer>
</template>

<script>
export default {

  name: 'footer',

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