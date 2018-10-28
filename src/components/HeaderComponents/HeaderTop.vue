<template>
	<div class="headerTop">
		<img src="../../assets/img/double11_5.jpg">
		<div class="header_pic">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		</div>
		<!-- 顶部渐隐渐现，要点处理 -->
		<div class="header" v-if="!showHeader" :style="opacityStyle">
	  		<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">内容内容</span>
	  	</div>
	  	<section class="content"> </section>
	</div>
</template>
<script>
	export default{
		name:'HeaderTop',
		data () {
			return {
				showHeader: true,
				opacityStyle: {
			        opacity: 0
			    }
			}
		},
		methods: {
			routerGo(){
		  		this.$router.go(-1)
		  	},
		    handleScroll () {
		      const top = document.documentElement.scrollTop || document.body.scrollTop
		      if (top > 30) {
		        let opacity = top / 190
		        opacity = opacity > 1 ? 1 : opacity
		        this.opacityStyle = { opacity }
		        this.showHeader = false
		      } else {
		        this.showHeader = true
		      }
		    }
		},
		mounted () {
		    window.addEventListener('scroll', this.handleScroll)
		},
		unmounted () {
		    window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style lang="less" scoped>
.headerTop{
	position: relative;
	height: 70rem;
	/*display: flex;
    flex-direction: column;*/
	img{
		width:100%;
	}
	.header_pic{
		.iconfont{
			padding:10px 12px;
			border-radius: 50px;
			background: #00bcd4;
			color:#fff;
			position: absolute;
			top:.7rem;
			left: .7rem;
		}
	}
	.header{
		text-align: center;
		line-height: 3rem;
		padding:0 .5rem;
		background: #00bcd4;
		color:#fff;
		z-index: 5;

		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
		.iconfont{
			float: left;
			color:#fff;
		}
		.header_title{
			padding: 1rem 0;
		    text-align: center;
		}
	}
	.content{
		/*flex:1;
		overflow-y:scroll;*/
	}
}
	
</style>