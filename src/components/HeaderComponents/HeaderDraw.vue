<template>
	<div class="headerTop" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
		<img src="../../assets/img/double11_3.jpg">
		<div class="header_pic">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		</div>
		<!-- 顶部渐隐渐现，要点处理 -->
		<div class="header" :style="opacityStyle" ref='header'>
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
				touchStatus:false,
				startX:'',
				touchY:'',
				opacityStyle: {
			        opacity: 0,
			        top:-50 +'px'
			    }
			}
		},
		mounted () {
		},
		unmounted () {
		},
		methods: {
		    //开始滑动
		    handleTouchStart (ev) {
		    	this.touchStatus = true
		    	ev = ev || window.event;
		        ev.stopPropagation()
		        //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
		        if(ev.touches.length == 1) {
		            this.startX = ev.touches[0].clientY;
		        }
		    },
		    //滑动中
		    handleTouchMove (ev) {
		    	ev = ev || window.event;
		    	ev.stopPropagation()
		    	const scrollTopH = document.documentElement.scrollTop || document.body.scrollTop
		    	var headDom = this.$refs.header
		    	var litop = Number(headDom.style.top.substring(0,headDom.style.top.length-2))
		      	if (this.touchStatus) {
	        		// 滑动的距离
	          		this.touchY = ev.touches[0].clientY
	          		// >0 向下滑动，否则 <0 向上滑动
	          		if (this.touchY - this.startX > 0) {
						this.opacityStyle.top = -50 + 'px'
	          			this.opacityStyle.opacity = 0
	          		}else{
			        	this.opacityStyle.top = 0 + 'px'
			        	this.opacityStyle.opacity = 1
	          		}
		      	}
		    },
		    //滑动结束
		    handleTouchEnd (ev) {
		      this.touchStatus = false
		    },
		    routerGo(){
		  		this.$router.go(-1)
		  	}
		},

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
		transition: .3s;
		position: fixed;
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