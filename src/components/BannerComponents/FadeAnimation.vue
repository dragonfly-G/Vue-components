<template>
	<div class="fadeAnimation">
		<div class="header">
	  		<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">公共fade//move动画</span>
	  	</div>
		<h2>看画廊的效果</h2>
		<transition>
		    <slot></slot>
		</transition>
	</div>
</template>

<script>
export default {
  name: 'FadeAnimation',
  methods:{
  	routerGo(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<style lang="less" scoped>
.header{
	text-align: center;
	line-height: 3rem;
	padding:0 .5rem;
	border-bottom: 1px solid #ccc;
	.iconfont{
		float: left;
	}
	.header_title{
		padding: 1rem 0;
	    text-align: center;
	}
}
h2{
	text-align: center;
}
.v-enter, .v-leave-to{
	transform: translateX(375px);
	/*opacity: 0*/
}
.v-enter-active, .v-leave-active{
	transition: all 0.5s;
}
</style>
