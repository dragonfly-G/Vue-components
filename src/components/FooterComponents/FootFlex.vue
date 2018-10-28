<template>
	<div class="footFlex">
		<!-- 此处是固定定位，要点处理 -->
		<div class="header">
		  	<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">头部固定</span>
	  	</div>
	  	<section class="content"> 
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  	</section>
	  	<!-- 此处是固定定位，要点处理 -->
		<div class="footer">
			<ul>
				<li><p>首页</p></li>
				<li><p>消息</p></li>
				<li><p>菜单</p></li>
			</ul>
	  	</div>
	</div>
</template>

<script>
export default {
  name: 'FootFlex',
  data () {
    return {
      
    }
  },
  methods:{
  	routerGo(){
  		this.$router.go(-1)
  	}
  },
  components: {
  	
  }
}
</script>

<style scoped lang="less">
.footFlex{
	/*此处是固定定位*/
	display: flex;
      flex-direction: column;
      height: 100vh;
      overflow-y: hidden;
	.header{
		background: #00bcd4;
		text-align: center;
		line-height: 3rem;
		height: 2.8rem;
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
	.content{
		/*此处是固定定位*/
		overflow-x: scroll;
		flex-direction: column;
		display: flex;
      	flex: 1;
      	p{
      		display: flex;
			flex-shrink: 0;
      	}
    }
    .footer{
    	ul{
    		list-style: none;
    		background: #00bcd4;
			text-align: center;
			line-height: 2.5rem;
			color:#fff;

    		display: flex;
    		li{
    			flex:1;
    		}
    	}
    }
}
</style>