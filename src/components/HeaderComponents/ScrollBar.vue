<template>
	<div class="scrollBar">
  		<img src="../../assets/img/double11_4.jpg">
		<div class="header_pic">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		</div>
	  	<!-- 顶部渐隐渐现，要点处理 -->
		<div class="header" :style="opacityStyle">
	  		<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">内容内容</span>
	  	</div>
  	</div>
</template>
<script>
	export default{
		name:'ScrollBar',
		data(){
			return{
				opacityStyle: {
			        opacity: 0,
			        top:-50 +'px'
			    },
			    beforeScrollTop:'',
			}
		},
		mounted(){
			this.beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			window.addEventListener("scroll",this.scrollDirect)
		},
		beforeDestroy(){
			window.removeEventListener("scroll",this.scrollDirect)
		},
		methods:{
			scrollDirect (event){
                event = event || window.event;
                //滚动后的位置(滚动条滚动的高度)
                var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                // 视口的高度(滚动条的高度)
                var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
                //当前全文文档的高度
                var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                //滑动的距离
                var delta = afterScrollTop - this.beforeScrollTop;
                //滚动条停留一下，记录一下，再滚动再比较
                this.beforeScrollTop = afterScrollTop;
                //滚动到底部执行事件
                if(afterScrollTop + clientHeight > scrollHeight - 10){
                    console.log("我到底部了--🐖");
                    return;
                }
                //滚动到顶部执行事件
                if(afterScrollTop < 1 || afterScrollTop > scrollHeight - 10){
                    console.log("我到顶部了--🐟");
                }else{
                    if(Math.abs(delta) < 1){
                        return false;
                    }
					if (delta > 0) {
						//大于0屏幕往下走，要做的事情
						this.opacityStyle.top = 0 + 'px'
      					this.opacityStyle.opacity = 1
					} else {
						//小于0屏幕往上走，要做的事情
						this.opacityStyle.top = -50 + 'px'
		    			this.opacityStyle.opacity = 0
					}
                }
			},
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
.scrollBar{
	height: 1000px;
	position: relative;
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
}
</style>