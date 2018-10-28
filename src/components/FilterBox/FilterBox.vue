<template>
	<div class="filteBox">
		<div class="header">
	  		<router-link to='/'>
		  		<span class="iconfont">&#xe667;</span>
		  	</router-link>
		  	<span class="header_title">筛选器</span>
	  	</div>
	  	<TestBox ref="div"></TestBox>
	</div>
</template>

<script>
	import TestBox from './TestBox'
export default {
  name: 'FilterBox',
  data () {
    return {
      	 
    }
  },
  mounted(){
  	console.log(this.$refs.div.$el)
  },
  methods:{

  },
  filters:{
   
   },
  components: {
  	TestBox
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

</style>