<template>
	<div class="HeaderSlider">
		<div class="header">
	  		<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">header下拉滚动</span>
	  	</div>
	  	<!-- 要点处理 -->
	  	<div ref="nav" class="nav">
	  		我到达顶部时固定
	  	</div>
	  	<div ref="content">
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容</p>
	  	</div>
	</div>
</template>
<script>
export default {
  name: 'HeaderSlider',
  data () {
    return {
      	diffTop: 0
    }
  },
  methods:{
  	routerGo(){
  		this.$router.go(-1)
  	},
  	handleScroll(){
  		var nav = this.$refs.nav
  		var content = this.$refs.content
  		var s = document.body.scrollTop || document.documentElement.scrollTop
  		// nav.offsetTop会变化，直到0，所以将变化前的值存起来
    	if(s>nav.offsetTop) {
    		nav.style = "position:fixed;top:0;"
    		content.style.paddingTop = '3rem'
    	} 
    	if (s<=this.diffTop) {
    		nav.style = ""
    		content.style =''
    	}
  	}
  },
  mounted(){
  	// 将变化前的值存起来☆☆☆☆☆☆☆☆
  	this.diffTop = this.$refs.nav.offsetTop
    window.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy(){
  	// 销毁全局事件
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style scoped lang="less">
.HeaderSlider{
	height:100rem;
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
	/*<!-- 要点处理 -->*/
	.nav{
		color:#fff;
		line-height: 50px;
		text-align: center;
		width:100%;
		height: 50px;
		background: #00bcd4;
	}
}
	
</style>