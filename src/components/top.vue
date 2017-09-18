<template>
<header>
	<div class="left">
		<router-link to="/home" tag="span" activeClass="active"></router-link>
	</div>
	<div class="right">
		<ul class="nav">
		<router-link to="/songlists" tag="li" activeClass="active">分类</router-link>
		<router-link to="/artlists" tag="li" activeClass="active">歌手</router-link>
		<router-link to="/listcate" tag="li" activeClass="active">榜单</router-link>
		<router-link to="/ucenter" tag="li" activeClass="active">我的</router-link>
		</ul>
		<span class="icon iconfont icon-fangdajing search"></span>
	</div>
	
</header>
</template>

<script>
export default {

  name: 'top',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
header{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 44px;
	display: block;
	line-height: 44px;
	background-color: #f8f8f8;
	z-index: 999;
}
.left{
	float: left;
    height: 100%;
    max-width: 103px;
    padding-left: 17px;
}
.left span{
	display: block;
    width: 26px;
    height: 26px;
    margin-top: 9px;
    background: url('../assets/logo-9cb.png') no-repeat 0 0;
    background-size: 26px;
}

.right{
	float: right;
	height: 100%;
	padding-right: 17px;
}
.right .nav{
	height: 100%;
    color: #999;
    white-space: nowrap;
    float: left;
}
.right .nav li{
	float: left;
	text-align: center;
	line-height: 40px;
	width: 32px;
    height: 100%;
    font-size: 16px;
    margin-right: 22px;
}
.right .search{
   float: left;
   font-size: 26px;
   position: relative;
   top: -3px
}
</style>
<style src="../assets/icon/iconfont.css"></style>