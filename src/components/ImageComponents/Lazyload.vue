<template>
	<div class="lazyload">
		<div class="header">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">图片懒加载</span>
		</div>
	  	<div class="lazyLoad">
		    <ul id="container">
		      	<li v-for="(item,index) in arr" :key="index">
		        	<img v-lazy="item.thumbnail" alt="">
		      	</li>
		    </ul>
		</div>
  	</div>
</template>
<script>
	//懒加载引入的文件最好写在main.js中
	import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'
	Vue.use(VueLazyload, {
		preLoad: 1.3,
		error: 'static/img/err.jpg',
	    loading: 'static/img/timg.gif',
	    attempt:1
	});
	export default{
		name:'Lazyload',
		data(){
			return{
				arr:[
					{thumbnail:'./static/img/lazy_1.jpg'},
					{thumbnail:'./static/img/lazy_2.jpg'},
					{thumbnail:'./static/img/lazy_3.jpg'},
					{thumbnail:'./static/img/lazy_4.jpg'},
					{thumbnail:'./static/img/lazy_5.jpg'},
					{thumbnail:'./static/img/lazy_6.jpg'},
					{thumbnail:'./static/img/lazy_7.jpg'},
					{thumbnail:'./static/img/lazy_8.jpg'},
					{thumbnail:'./static/img/lazy_9.jpg'},
					{thumbnail:'./static/img/lazy_10.jpg'},
					{thumbnail:'./static/img/lazy_4.jpg'},
					{thumbnail:'./static/img/lazy_5.jpg'},
					{thumbnail:'./static/img/lazy_7.jpg'},
					{thumbnail:'./static/img/lazy_8.jpg'},
					{thumbnail:'./static/img/lazy_9.jpg'},
					{thumbnail:'./static/img/lazy_3.jpg'},
					{thumbnail:'./static/img/lazy_4.jpg'},
					{thumbnail:'./static/img/lazy_5.jpg'},
					{thumbnail:'./static/img/lazy_6.jpg'},
					{thumbnail:'./static/img/lazy_7.jpg'},
					{thumbnail:'./static/img/lazy_8.jpg'},
					{thumbnail:'./static/img/lazy_9.jpg'},
					{thumbnail:'./static/img/lazy_10.jpg'},
					{thumbnail:'./static/img/lazy_7.jpg'},
					{thumbnail:'./static/img/lazy_8.jpg'},
					{thumbnail:'./static/img/lazy_9.jpg'},
					{thumbnail:'./static/img/lazy_3.jpg'},
					{thumbnail:'./static/img/lazy_4.jpg'},
				]
			}
		},
		mounted () {
	      	console.log(this.$route.query.name,66666666)
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
.lazyLoad{
	ul{
		img{
			width:100%;
		}
	}
}
</style>