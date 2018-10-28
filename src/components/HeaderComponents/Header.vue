<template>
	<div class="headerCom">
		<!-- 此处是固定定位，要点处理 -->
		<div class="header">
		  	<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">头部固定</span>
	  	</div>
	  	<section class="content"> 
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  		<p>内容内容内容内容内容内容</p>
	  	</section>
	</div>
</template>

<script>
export default {
  name: 'Header',
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
.headerCom{
	height:50rem;
	.header{
		background: #00bcd4;
		text-align: center;
		line-height: 3rem;
		padding:0 .5rem;
		/*此处是固定定位*/
		position: fixed;
		top: 0;
		left:0;
		right: 0;
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
		margin-top:3rem;
     }
}
</style>