<template>
	<div class="header">
  		<span class="iconfont" @click="routerGo">&#xe667;</span>
	  	<span class="header_title">头部固定</span>
  	</div>
</template>
<script>
	export default{
		name:'GuHeader',
		data(){
			return{
				
			}
		},
		methods:{
		  	routerGo(){
		  		this.$router.go(-1)
		  	}
		},
	}
</script>
<style lang="less" scoped>
.header{
	z-index: 9;
	background: #00bcd4;
	text-align: center;
	line-height: 3rem;
	padding:0 .5rem;
	.iconfont{
		float: left;
		color:#fff;
	}
	.header_title{
		padding: 1rem 0;
	    text-align: center;
	    color:#fff;
	}
}	
</style>