<template>
  <div>
  	<div class="header">
	  	<span class="iconfont"  @click="routerGo">&#xe667;</span>
	  	<span class="header_title">轮播图</span>
  	</div>
  	<!-- 要点处理 -->
  	<div class="banner_img">
  		<swiper :options="swiperOption">
		    <swiper-slide>
		    	<img src="../../assets/img/double11_1.jpg">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/img/double11_2.jpg">
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/img/double11_3.jpg">
		    </swiper-slide>
		    <!-- 分页小圆点 -->
		   	<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
  	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  	name: 'Banner',
  	data () {
    	return {
      		swiperOption: {
      			// 如果这种形式不行就用下边的{}中的
      			// pagination : '.swiper-pagination'
      			pagination: { el: ".swiper-pagination"},
      			// 滑动出现卡顿加上下边代码
      			observeParents: true,
      			observer: true
      		}
    	}
  	},
  	methods:{
  		routerGo(){
	  		this.$router.go(-1)
	  	},
  	},
  	components: {
    	swiper,
    	swiperSlide
 	}
}
</script>

<style scoped lang="less">
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
.banner_img{
	/*占位*/
	/*overflow: hidden;*/ 
	height:0;
	width:100%;
	padding-bottom:37.68%;
	/*图片撑满屏幕宽度*/
	.swiper-slide{
		img{
			width:100%;
		}
	}
	/*修改分页小圆点的样式*/
	.swiper-pagination{
		.swiper-pagination-bullet-active{
			background:red;
		}
	}
}
	
</style>
